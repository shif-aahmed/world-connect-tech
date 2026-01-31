import { FaWifi, FaTv, FaMobileAlt } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaWifi />,
      title: "HIGH-SPEED INTERNET",
      description:
        "Fast, reliable broadband for streaming, work, gaming, and smart devices — with stable speeds and no interruptions.",
    },
    {
      icon: <FaTv />,
      title: "PREMIUM TV CHANNELS",
      description:
        "Access 200+ channels including sports, movies, news, and kids’ entertainment — all in one simple setup.",
    },
    {
      icon: <FaMobileAlt />,
      title: "MOBILE CONNECTIVITY",
      description:
        "Stay connected on the go with flexible mobile plans designed to match your data and usage needs.",
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
