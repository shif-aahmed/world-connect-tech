import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/services" element={<ServicesPage />} />
        
        {/*<Route path="/privacy" element={<Privacy />} />*/}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <RetailersSection />
      <Footer />
    </Router>
  );
}

export default App;
