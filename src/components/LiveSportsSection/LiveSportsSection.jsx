import React from "react";
import "./LiveSportsSection.css";
import liveSportsImage from "../../assets/livesport.png";

const LiveSportsSection = () => {
  return (
    <section className="liveSportsSection">
      <div className="callNow">
        <div className="callNowText">Enjoy fast, reliable internet, premium TV, and flexible mobile plans — all with professional setup and 24/7 support.</div>
        <a href="tel:+14129950913">
              <button className="callNowBtn">Call Now</button>
            </a>
      </div>
      <h2 className="liveSportsHeading">
        Stream live sports, premium TV channels, and on-demand entertainment with reliable high-speed internet.
      </h2>

      <div className="liveSportsContent">
        <div className="liveSportsText">
          <p>
            World Connect Tech helps you compare and choose the best internet, cable TV, and phone service providers available in your area. 
            Whether you want uninterrupted live sports, family entertainment, or bundled deals at competitive prices, our experts guide you to the right option—fast and hassle-free.
          </p>
        </div>

        <div className="liveSportsImage">
          <img src={liveSportsImage} alt="Live Sports Streaming and TV Services" />
        </div>
      </div>
    </section>
  );
};

export default LiveSportsSection;
