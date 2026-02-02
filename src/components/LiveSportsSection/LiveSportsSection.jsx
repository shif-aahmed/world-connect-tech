import { useEffect, useRef } from "react";
import "./LiveSportsSection.css";
import liveSportsImage from "../../assets/livesport.png";

const LiveSportsSection = () => {
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

  return (
    <section className="liveSportsSection" ref={sectionRef}>
      <div className="callNow animate-call">
        <div className="callNowText">
          Enjoy fast, reliable internet, premium TV, and flexible mobile plans — all with professional setup and 24/7 support.
        </div>
        <a href="tel:+14129950913">
          <button className="callNowBtn">Call Now</button>
        </a>
      </div>

      <h2 className="liveSportsHeading animate-heading">
        Stream live sports, premium TV channels, and on-demand entertainment with reliable high-speed internet.
      </h2>

      <div className="liveSportsContent">
        <div className="liveSportsText animate-left">
          <p>
            World Connect Tech helps you compare and choose the best internet, cable TV, and phone service providers available in your area.
            Whether you want uninterrupted live sports, family entertainment, or bundled deals at competitive prices, our experts guide you to the right option—fast and hassle-free.
          </p>
        </div>

        <div className="liveSportsImage animate-right">
          <img src={liveSportsImage} alt="Live Sports Streaming and TV Services" />
        </div>
      </div>
    </section>
  );
};

export default LiveSportsSection;
