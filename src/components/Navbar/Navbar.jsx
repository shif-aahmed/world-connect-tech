import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="navbar">

      {/* Bottom section */}
      <div className="bottomBar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Menu toggle button (mobile only) */}
        <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`links ${menuOpen ? "show" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
            <div className="topBar">
        <div className="contactInfo">
          <a href="tel:+14129950913">+1 412 995 0913</a>
          <a href="mailto:info@worldcontechllc.com">
            info@worldcontechllc.com
          </a>
          <a
            href="https://www.google.com/maps?q=141+E+26TH+St,+Erie,+PA+16504"
            target="_blank"
            rel="noopener noreferrer"
          >
            141 E 26TH St, Erie, PA 16504
          </a>
        </div>

        <div className="socials">
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
