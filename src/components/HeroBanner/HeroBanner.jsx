import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="heroOverlay">
        <div className="heroContent">

          <h1>
            Fast & Reliable Internet Services <br />
            <span>Starting Today in Your Area</span>
          </h1>

          <p>
            Get high-speed internet, premium TV, and mobile plans with
            professional installation and 24/7 customer support.
          </p>

          <ul className="heroPoints">
            <li>✔ Same-Day Installation Available</li>
            <li>✔ No Hidden Fees</li>
            <li>✔ Trusted Local Providers</li>
          </ul>

          <div className="heroCTA">
            <a href="tel:+14129950913">
              <button className="heroBtn">Call Now</button>
            </a>

            <span className="heroSubText">
              Speak to a specialist • Free consultation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
