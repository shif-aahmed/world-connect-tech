import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutPage">
      {/* Large heading */}
      <h1 className="aboutHeading">About Us</h1>

      {/* Main content */}
      <div className="aboutContent">
        <p>
          Searching for dependable TV, internet, and phone services in your area? Let
          World Connect Tech assist you in securing the most favorable deals. Discover
          premium packages and enjoy seamless connectivity customized to your requirements.
        </p>

        <h2>Who We Are</h2>
        <p>
          At World Connect Tech, we make it simple to access top-quality internet, cable
          television, and phone services—all from one convenient location. We collaborate
          with the leading service providers nationwide to offer exceptional entertainment
          and high-speed internet. Whether you prefer satellite services or streaming options,
          our team is only a phone call away to ensure you receive the best offers in your region.
        </p>
        <p>
          Our specialists are available to guide you through comparisons of cable and streaming TV,
          high-speed internet, and mobile plans that fit your budget perfectly. As authorized resellers
          for multiple Internet and Cable TV providers, World Connect Tech stands out by consistently
          putting your needs first.
        </p>

        <h2>What We Offer</h2>
        <p>
          <strong>Entertainment at Your Fingertips:</strong> Access a vast selection of over 200 channels,
          enjoy premium content, and follow live sports and news. Take advantage of modern streaming TV
          services with live and on-demand programming, so you never miss your favorite shows and movies.
        </p>
        <p>
          <strong>High-Speed Internet:</strong> Enjoy a reliable and secure ultra-fast internet connection
          with guaranteed speeds. We connect you to the best plans and deals from trusted providers.
        </p>
        <p>
          <strong>Mobile Streaming Made Easy:</strong> Turn your phone into a portable cinema and stream
          the latest episodes of your favorite programs at any time. Our flexible plans are perfect for
          avid streamers, families, and everyone in between.
        </p>
        <p>
          <strong>Flexible Mobile Solutions:</strong> Create a tailored data plan, choose accessories,
          and select mobile services that enhance your browsing and working experience. We offer plans
          suitable for streamers, families, and individuals seeking maximum flexibility.
        </p>

        <h2>Our Mission</h2>
        <p>
          At World Connect Tech, our mission goes beyond simply finding the right solution—we aim to
          help you save money while maintaining excellent service quality. Our goal is to keep you
          connected with loved ones, enabling smooth browsing, streaming, working, and gaming with ease.
        </p>
        <p>
          As an authorized partner of multiple Internet and Cable TV providers, including Spectrum,
          DirecTV, T-Mobile, EarthLink, Windstream, and Viasat, World Connect Tech sets itself apart
          by consistently prioritizing the best interests of our customers in everything we do.
        </p>
      </div>
    </div>
  );
};

export default About;
