import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import VantaBg from "./components/VantaBg/VantaBg";

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import RetailersSection from "./components/RetailersSection/RetailersSection";

import Home from "./pages/Home";
import About from "./pages/About/About";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Faq from "./pages/Faq/Faq";
// import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact/Contact";
import './App.css';

// Wrapper to use useLocation
function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // true only on homepage

  return (
    <>
    <div className="vanta-wrapper">
        <VantaBg />

      <Navbar transparent={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/privacy" element={<Privacy />} /> */}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <RetailersSection />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
