import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Transportation from './pages/Transportation';
import CustomsClearance from './pages/CustomsClearance';
import PortHandling from './pages/PortHandling';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/ocean-shipping" element={<Shipping />} />
          <Route path="/services/transportation" element={<Transportation />} />
          <Route path="/services/customs-clearance" element={<CustomsClearance />} />
          <Route path="/services/port-handling" element={<PortHandling />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
