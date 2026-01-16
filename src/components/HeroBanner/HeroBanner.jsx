import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="heroOverlay">
        <div className="heroContent">
          <h1>
            Internet, premium TV and mobility <br /> all in one place
          </h1>

          <p>
            With Royal Tech Connect, you will experience a new level of
            connectivity and entertainment, all backed by cutting-edge
            technology and exceptional customer support.
          </p>

          <a href="tel:+14129950913">
            <button className="heroBtn">Call Us Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
