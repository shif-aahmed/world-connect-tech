import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="heroOverlay">
        <div className="heroContent">
          <h1>
            Internet, premium TV, and mobile services <br /> all together in one place
          </h1>

          <p>
            With World Connect Tech, enjoy an enhanced level of connectivity and entertainment, 
            supported by advanced technology and outstanding customer care.
          </p>
        <div >For new internet services:</div>
        <br />
          <a href="tel:+14129950913">
            <button className="heroBtn">Call Us Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
