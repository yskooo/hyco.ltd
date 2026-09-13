---
name: Luminous Professionalism
colors:
  surface: '#f2fbff'
  surface-dim: '#c8dee7'
  surface-bright: '#f2fbff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e4f7ff'
  surface-container: '#dcf1fb'
  surface-container-high: '#d6ecf5'
  surface-container-highest: '#d0e6ef'
  on-surface: '#091e25'
  on-surface-variant: '#3d4949'
  inverse-surface: '#1f333a'
  inverse-on-surface: '#def4fe'
  outline: '#6d7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#006a6a'
  primary: '#006767'
  on-primary: '#ffffff'
  primary-container: '#008282'
  on-primary-container: '#f3fffe'
  inverse-primary: '#71d6d6'
  secondary: '#5a5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dce0e0'
  on-secondary-container: '#5f6364'
  tertiary: '#8d4b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b15f00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8ef3f2'
  primary-fixed-dim: '#71d6d6'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#dfe3e3'
  secondary-fixed-dim: '#c3c7c7'
  on-secondary-fixed: '#181c1d'
  on-secondary-fixed-variant: '#434848'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f2fbff'
  on-background: '#091e25'
  surface-variant: '#d0e6ef'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Poppins
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for a premium professional services marketplace, emphasizing intelligence, clarity, and high-end curation. The brand personality is "Enlightened Expertise"—sophisticated but accessible, authoritative but inviting.

The visual style is a refined hybrid of **Glassmorphism** and **Minimalism**. It utilizes a "Pearl White" aesthetic characterized by layered translucency, soft light diffusion, and high-precision hairline strokes. Instead of heavy shadows or flat blocks of color, depth is created through backdrop blurs and ambient color blooms that suggest an environment of light and air. The interface should feel like a clean, high-tech gallery space where the focus is on the quality of the service providers.

## Colors

The palette is anchored by **Warm Pearl White**, providing a softer, more premium foundation than pure digital white.

- **Primary Spectrum:** The teal-based primary (#0D8C8C) represents professional reliability. It is used for calls to action, active states, and brand markers.
- **Secondary Spectrum:** Cool teal-tinted off-whites (#F0F4F4) provide subtle contrast for nested containers or alternate sections.
- **Surface & Borders:** The "Glass" effect is achieved with 60% white opacity and a 12px to 20px backdrop blur. Borders are ultra-fine (1px) and tinted with a pearlescent teal-gray to define edges without adding visual weight.
- **Functional Accents:** Warning Amber (#D97706) is reserved for escrow, financial notifications, and status alerts that require high visibility without breaking the professional tone.

## Typography

Typography balances the geometric friendliness of **Poppins** for headings with the systematic clarity of **Inter** for utility and body text.

- **Headlines:** Use Poppins with SemiBold or Bold weights. Tighten letter spacing slightly on larger displays to maintain a premium, "locked-in" feel.
- **Body Text:** Inter provides high legibility for service descriptions and contract details. 
- **Labels:** Use Inter Medium for labels and navigation. Small labels (caps) should be used for status indicators or metadata to create a hierarchy that feels organized and data-driven.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous white space to allow the glassmorphic elements "room to breathe." 

- **Grid:** A 12-column system is used for desktop. Components should span 3, 4, 6, or 12 columns to maintain structural balance.
- **Rhythm:** Spacing follows an 8px linear scale. Large sections are separated by 80px - 120px on desktop to emphasize a premium, editorial feel.
- **Ambient Blooms:** Use large, low-opacity radial gradients (#E8F6F6 at 30% opacity) behind primary glass containers. These should be offset from the center to create an organic, luminous feel.

## Elevation & Depth

Depth is not achieved through traditional drop shadows, but through **Tonal Stacking and Light Diffusion**.

1.  **Level 0 (Background):** The Warm Pearl White (#FAF9F5) canvas.
2.  **Level 1 (Blooms):** Soft, blurred spheres of #E8F6F6 placed behind interactive cards.
3.  **Level 2 (Surface):** Glass panels (rgba 255, 255, 255, 0.6) with `backdrop-filter: blur(16px)`.
4.  **Level 3 (Accents):** Hairline pearlescent borders (rgba 178, 222, 222, 0.5) that catch the "light" at the edges of panels.

When a user hovers over an element, the `backdrop-filter` blur should increase slightly, and the pearlescent border should transition to a more opaque Teal-200.

## Shapes

The shape language is sophisticated and modern, avoiding both aggressive sharpness and juvenile "bubbliness."

- **Standard Radius:** 0.5rem (8px) for buttons and input fields.
- **Large Radius:** 1rem (16px) for glass cards and modal containers.
- **Pill Shapes:** Used exclusively for status chips and tags (e.g., "Verified," "Available") to distinguish them from actionable buttons.
- **Abstract Objects:** Use geometric glass shapes (circles, hexagons, waves) with internal glyphs instead of photography to represent service categories.

## Components

- **Glass Cards:** The primary container. Features a 1px pearlescent border and 60% white opacity. No drop shadow; use a soft ambient glow (80px blur) behind the card on hover.
- **Primary Buttons:** Solid Primary-500 (#0D8C8C) with white text. On hover, apply a subtle inner glow rather than a dark overlay.
- **Secondary Buttons:** Ghost style with the pearlescent border and Primary-500 text.
- **Inputs:** Soft Teal-tinted background (#F0F4F4) with a 1px border that glows when focused. Text should be Slate-900.
- **Service Placeholders:** Abstract 3D-style glass objects using layers of transparency and the primary teal tint. Avoid all photographic human faces; focus on symbolic representation of services.
- **Navigation:** A sticky top bar with `backdrop-filter: blur(20px)` and a single 1px border at the bottom.