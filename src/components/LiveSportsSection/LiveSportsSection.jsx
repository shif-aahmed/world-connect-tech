import React from "react";
import "./LiveSportsSection.css";
import liveSportsImage from "../../assets/livesport.png"; // replace with your image

const LiveSportsSection = () => {
  return (
    <section className="liveSportsSection">
      <h2 className="liveSportsHeading">
        Exciting live sports and entertaining TV shows for your closest companions.
      </h2>
      <div className="liveSportsContent">
        <div className="liveSportsText">
          <p>
            We are here to help you customize your ideal package for internet, cable television, and telephone services. Explore top-tier service providers available in your locality based on our expert recommendations. Feel free to contact us to learn about our special promotions.
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
