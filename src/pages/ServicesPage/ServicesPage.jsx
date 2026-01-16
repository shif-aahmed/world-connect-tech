import React from "react";
import "./ServicesPage.css";
import PackagesSection from "../../components/PackagesSection/PackagesSection";

import liveSportsImage from "../../assets/livesport.png"; // Make sure path is correct

const servicesData = [
  {
    title: "Exciting live sports and entertaining TV shows for your closest companions",
    text: "Watch the most recent live sports and special occasions from across the globe. Acquire entry to numerous on-demand series and films to indulge in an excellent TV watching experience."
  },
  {
    title: "Residential telephone service",
    text: "Maintain connectivity throughout dependable digital telephone services, endless local calls, cost-effective international permanent charges, and enhanced calling capabilities."
  },
  {
    title: "Cable TV & Internet",
    text: "Obtain top-notch amusement for loved ones and companions and ultra-swift internet connectivity for streaming videos and engaging in online gaming at remarkable prices."
  }
];

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <div className="headerSection">
        <h1>Exciting live sports and entertaining TV shows for your closest companions</h1>
        <img src={liveSportsImage} alt="Live Sports" className="headerImage" />
        <h2>4K Ultra HD Quality</h2>
        <p className="headerText">
          Watch the most recent live sports and special occasions from across the globe.
          Acquire entry to numerous on-demand series and films to indulge in an excellent TV watching experience.
        </p>
      </div>

      <div className="servicesSection">
        {servicesData.map((service, index) => (
          <div className="serviceCard" key={index}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
      <PackagesSection /> 
    </div>
  );
};

export default ServicesPage;
