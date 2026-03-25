import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ElectrifAI from './pages/ElectrifAI';
import ServicioAI from './pages/ServicioAI';
import LeasifAI from './pages/LeasifAI';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="electrifai" element={<ElectrifAI />} />
          <Route path="servicio-ai" element={<ServicioAI />} />
          <Route path="leasifai" element={<LeasifAI />} />
        </Route>
      </Routes>
    </Router>
  );
}
