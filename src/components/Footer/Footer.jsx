import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faq" },
    // { name: "Privacy Policy", path: "/privacy" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* Column 1 */}
        <div className="footerCol">
          <div className="footerLogo">
            <img src={logo} alt="Logo" />
          </div>
          <p className="footerText">
            World Connect Tech is your one-stop shop for TV, internet, and phone
            services. We provide the best deals in your area.
          </p>
          <div className="footerSocials">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footerCol">
          <h4>Quick Links</h4>
          <div className="footerLinks">
            {quickLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "footerLink active" : "footerLink"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="footerCol">
          <h4>
              Get in connect
          </h4>
          <p className="footerText">
            <a href="tel:+14129950913">+1 412-995-0913</a>
            <br />
            <a href="mailto:info@worldcontechllc.com">
            info@worldcontechllc.com
            </a>
            <br />
            <br />
            Don't miss our future updates.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
