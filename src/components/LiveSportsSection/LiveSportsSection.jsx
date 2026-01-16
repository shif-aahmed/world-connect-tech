import React from "react";
import "./LiveSportsSection.css";
import liveSportsImage from "../../assets/livesport.png"; // replace with your image

const LiveSportsSection = () => {
  return (
    <section className="liveSportsSection">
      <h2 className="liveSportsHeading">
        Thrilling live sports and captivating TV shows for you and your loved ones.
      </h2>
      <div className="liveSportsContent">
        <div className="liveSportsText">
          <p>
            At World Connect Tech, we help you build your perfect package for internet, cable TV, and phone services. Discover top-quality providers in your area through our expert guidance, and reach out to learn about our exclusive offers.
          </p>
        </div>
        <div className="liveSportsImage">
          <img src={liveSportsImage} alt="Live Sports" />
        </div>
      </div>
    </section>
  );
};

export default LiveSportsSection;
