import { useEffect, useRef } from "react";
import { FaWifi, FaTv, FaMobileAlt } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("in-view");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FaWifi />,
      title: "High-Speed Internet",
      description:
        "Fast, reliable broadband for streaming, work, gaming, and smart devices with stable speeds.",
      position: "left",
    },
    {
      icon: <FaTv />,
      title: "Premium TV Channels",
      description:
        "Access 200+ channels including sports, movies, news, and kids’ entertainment.",
      featured: true,
      position: "center",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Connectivity",
      description:
        "Flexible mobile plans designed to match your data and everyday usage needs.",
      position: "right",
    },
  ];

  return (
    <section className="featuresSection" ref={sectionRef}>
      <div className="featuresHeader animateHeader">
        <h2>Why Choose Us?</h2>
        <p>
          Whether you are in the heart of the city or a remote location,
          we’ve got you covered.
        </p>
      </div>

      <div className="featuresContainer">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`featureCard ${feature.featured ? "featured" : ""} animate-${feature.position}`}
          >
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
