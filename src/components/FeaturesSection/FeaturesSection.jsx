import { FaWifi, FaTv, FaMobileAlt } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaWifi />,
      title: "BROADBAND",
      description:
        "Enjoy limitless high-speed internet connectivity that covers your entire family and all their devices without any restrictions.",
    },
    {
      icon: <FaTv />,
      title: "SATELLITE TV",
      description:
        "Movies, kid's entertainment, sports, news and more! Over 200 channels! Watch with your loved ones, friends, and family.",
    },
    {
      icon: <FaMobileAlt />,
      title: "MOBILITY",
      description:
        "Create a customized mobile solution that enables you to share, enjoy entertainment, and maintain global connectivity on your terms.",
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
