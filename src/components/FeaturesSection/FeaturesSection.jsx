import { FaWifi, FaTv, FaMobileAlt } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaWifi />,
      title: "BROADBAND",
      description:
        "Experience unlimited high-speed internet for your entire household and all devices, without any limits or interruptions.",
    },
    {
      icon: <FaTv />,
      title: "SATELLITE TV",
      description:
        "Enjoy movies, kids' shows, sports, news, and more! Access over 200 channels with your family and friends.",
    },
    {
      icon: <FaMobileAlt />,
      title: "MOBILITY",
      description:
        "Get a tailored mobile solution from World Connect Tech that keeps you connected and entertained wherever you go.",
    },
  ];

  return (
    <section className="featuresSection">
      <div className="featuresContainer">
        {features.map((feature, index) => (
          <div key={index} className="featureCard">
            <div className="featureIcon">{feature.icon}</div>
            <h3 className="featureTitle">{feature.title}</h3>
            <p className="featureDesc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
