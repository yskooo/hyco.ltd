import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminClient } from '@/utils/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the exact shape and constraints of expected incoming data
const contactSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  name: z.string().max(100).optional(),
  message: z.string().max(2000, "Message is too long").optional(),
  source: z.string().max(100).default("Landing Page"),
  // Honeypot field - must be empty
  company_website: z.string().max(0, "Honeypot triggered").optional().or(z.literal('')),
});

export async function POST(request: Request) {
  try {
    // 1. Parse JSON body
    const body = await request.json();

    // 2. Validate using Zod
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid data provided.', details: validationResult.error.format() },
        { status: 400 }
      );
    }

    const { email, name, message, source, company_website } = validationResult.data;

    // Helper function for admin alerts
    const sendAlert = async (subject: string, html: string) => {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        try {
          await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [adminEmail],
            subject: `[ALERT] ${subject}`,
            html
          });
        } catch (e) { console.error('Alert error:', e); }
      }
    };

    // 3. Honeypot check (Bot protection)
    if (company_website && company_website.length > 0) {
      await sendAlert('Bot Attack Detected', `<p>Honeypot triggered.</p><p>Email: ${email}</p><p>Website: ${company_website}</p>`);
      // Act like it succeeded to fool the bot, but do nothing
      return NextResponse.json({ success: true, message: 'Submitted successfully.' }, { status: 200 });
    }

    // 4. Initialize Supabase Admin Client
    const supabase = createAdminClient();

    // 5. Insert into Supabase
    const { error: dbError } = await supabase
      .from('leads')
      .insert([
        { 
          email, 
          full_name: name || null, 
          message: message || null,
          source 
        }
      ]);

    // Handle unique constraint violations silently or explicitly (e.g. they already signed up)
    if (dbError && dbError.code !== '23505') { // 23505 is unique violation
      console.error('Supabase Insert Error:', dbError);
      await sendAlert('Database Insert Error', `<p>Failed to insert lead.</p><p>Error: ${dbError.message}</p><p>Email: ${email}</p>`);
      return NextResponse.json({ error: 'Database error occurred' }, { status: 500 });
    }

    // 6. Send Email Notification via Resend (Optional/Configurable)
    const contactEmail = process.env.CONTACT_EMAIL;
    if (contactEmail) {
      try {
        await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>', // Update with your verified domain later
          to: [contactEmail],
          subject: `New Contact Form Submission from ${source}`,
          html: `<p>You have a new contact form submission!</p>
                 <ul>
                   <li><strong>Email:</strong> ${email}</li>
                   <li><strong>Name:</strong> ${name || 'N/A'}</li>
                   <li><strong>Source:</strong> ${source}</li>
                 </ul>
                 <h3>Message:</h3>
                 <p>${message ? message.replace(/\n/g, '<br/>') : 'No message provided.'}</p>`,
        });
      } catch (emailError) {
        console.error('Resend Error:', emailError);
        // We still return success to the user even if the notification email fails
      }
    }

    // 7. Return Success
    return NextResponse.json({ success: true, message: 'Submitted successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
