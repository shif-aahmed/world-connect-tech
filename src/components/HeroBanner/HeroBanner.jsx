import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="heroOverlay">
        <div className="heroContent">

          <div className="heroTopText">
            <span>Fast Connection</span> •
            <span>Reliable</span> •
            <span>Fast Support</span>
          </div>

          <h1>Fast & Reliable Internet Services</h1>

          <p>
            High-speed internet, premium TV, and mobile plans —
            professionally installed with 24/7 customer support.
          </p>

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
