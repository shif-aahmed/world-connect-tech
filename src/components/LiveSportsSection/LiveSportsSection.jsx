import React from "react";
import "./LiveSportsSection.css";
import liveSportsImage from "../../assets/livesport.png";

const LiveSportsSection = () => {
  return (
    <section className="liveSportsSection">
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
