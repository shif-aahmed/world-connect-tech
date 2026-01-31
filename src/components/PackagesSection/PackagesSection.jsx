import { useState } from "react";
import { FaWifi, FaMobileAlt, FaTv } from "react-icons/fa";
import "./PackagesSection.css";

const PackagesSection = () => {
  const [activePackage, setActivePackage] = useState(null);

  // Dynamic card rendering (UNIVERSAL)
  const renderTripleCards = (cardsData, highlightIndex = null, showAvailability = true) => (

    <div className="triplePricingGrid">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`pricingCard ${highlightIndex === index ? "bestValue" : ""}`}
        >
          {highlightIndex === index && <div className="badge">Best value</div>}

          <h4>{card.title}</h4>
         {highlightIndex === index && showAvailability && (
  <p className="availabilityNote">*where available</p>
)}

          {card.subtitle && <p className="tvSubtitle">{card.subtitle}</p>}

          {card.price && (
            <p className="price">
              {card.price}
              <span>{card.period}</span>
            </p>
          )}

          {card.features && card.features.length > 0 && (
            <ul>
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}

          <div className="cardFooter">
            {card.footer.map((f, i) => (
              <span key={i}>{f}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  /* ================= DATA ================= */

  const singlePlayInternet = [
    {
      title: "1 Gbps",

      features: [],
      footer: [
        "With ABP & paperless bill",
        "Gateway included",
        "2-year price lock",
        "$100 gift card",
      ],
    },
    {
      title: "500 Mbps",

      features: [],
      footer: ["With ABP & paperless bill", "Gateway included", "1-year price lock"],
    },
    {
      title: "300 Mbps",

      features: [],
      footer: ["With ABP & paperless bill", "Gateway included", "1-year price lock"],
    },
  ];

  const singlePlayEntertainmentTV = [
    {
      title: "Everything TV",
      subtitle: "200+ Channels",
      features: [],
      footer: [
        "Includes local channels plus:",
        "CBS, TNT, A&E, FOX, USA, WE TV, Food Network, Bravo, MTV, TLC, ESPN",
      ],
    },
    {
      title: "Extra TV",
      subtitle: "125+ Channels",
      features: [],
      footer: [
        "Includes local channels plus:",
        "CNN, FX, MSNBC, Disney Channel, ESPN, TNT, ABC, HGTV, SYFY, CBS, NBC",
      ],
    },
    {
      title: "Entertainment TV",
      subtitle: "85+ Channels",
      features: [],
      footer: [
        "Includes local channels plus:",
        "AMC, TLC, History Channel, HGTV, Lifetime, A&E, Discovery Channel, Food Network, BBC, Hallmark Channel, MTV",
      ],
    },
    {
      title: "Premier",
      subtitle: "250+ Channels",
      features: [],
      footer: [
        "Includes local channels plus:",
        "HBO Max, HBO ZONE, ESPN U, ACCN ESPN, PAC 12 Networks, CBS Sports Network, Stadium College Sports, FS2, BIG Network, SHOWTIME, MAX, STARZ",
      ],
    },
  ];

  const singlePlayMobile = [
    {
      title: "Unlimited Max",

      features: [],
      footer: [
        "2 lines – $80/mo",
        "3 lines – $80/mo",
        "Get your 3rd line free",
        "50GB premium data",
        "Unlimited talk and text",
        "15GB mobile hotspot",
        "HD video streaming",
      ],
    },
    {
      title: "Unlimited",

      features: [],
      footer: [
        "2 lines – $60/mo",
        "3 lines – $60/mo",
        "Get your 3rd line free",
        "20GB premium data",
        "Unlimited talk and text",
        "5GB mobile hotspot",
        "HD video streaming",
      ],
    },
    {
      title: "5 Gbps",

      features: [],
      footer: [
        "5GB premium data",
        "5G access included",
        "Unlimited talk and text",
        "HD video streaming",
      ],
    },
    {
      title: "1 Gbps",

      features: [],
      footer: [
        "1GB premium data",
        "5G access included",
        "Unlimited talk and text",
        "HD video streaming",
      ],
    },
  ];

  const doublePlayInternetMobile = [
    {
      title: "1 Gbps / 2 Gbps*",

      features: ["Ultra-fast speed", "Ultra-connected homes", "Great for multiple devices"],
      footer: ["1-year price lock", "Gateway included"],
    },
    {
      title: "500 Mbps",

      features: ["Streaming 4K UHD", "Multiplayer gaming", "Remote work & school"],
      footer: ["1-year price lock", "Gateway included"],
    },
    {
      title: "300 Mbps",
 
      features: ["Streaming", "Gaming", "Downloading large files"],
      footer: ["1-year price lock", "Gateway included"],
    },
  ];

  const doublePlayInternetTV = [
    {
      title: "1 Gbps / 2 Gbps*",

      features: ["Ultra-fast speed", "Ultra-connected homes", "Great for multiple devices"],
      footer: ["1-year price lock", "Gateway included"],
    },
    {
      title: "500 Mbps",
 
      features: ["Streaming 4K UHD", "Multiplayer gaming", "Remote work & school"],
      footer: ["1-year price lock", "Gateway included"],
    },
    {
      title: "300 Mbps",

      features: ["Streaming", "Gaming", "Downloading large files"],
      footer: ["1-year price lock", "Gateway included"],
    },
  ];

  const triplePlayCards = [
    {
      title: "1 Gbps / 2 Gbps*",

      features: ["Ultra-fast speed", "Ultra-connected homes", "Great for multiple devices",],
      footer: [
        "1-year price lock",
        "Gateway included",
      ],
    },
    {
      title: "500 Mbps",

      features: ["Streaming 4K UHD", "Multiplayer gaming", "Remote work & school",],
      footer: [
        "1-year price lock",
        "Gateway included",
      ],
    },
    {
      title: "300 Mbps",

      features: ["Streaming", "Gaming", "Downloading large files",],
      footer: [
        "1-year price lock",
        "Gateway included",
      ],
    },
  ];

  return (
    <>
      <section className="packagesSection">
        <h2 className="packagesHeading">Select Your Preferred Plan</h2>

        <div className="packagesCards">
          <div className="packageCard triplePlayCard" onClick={() => setActivePackage("single")}>
            <h3>Single Play</h3>
            <p>Internet / Mobile / TV</p>
            <div className="tripleIcons">
              <FaWifi />
              <FaMobileAlt />
              <FaTv />
            </div>
          </div>

          <div className="packageCard triplePlayCard" onClick={() => setActivePackage("double")}>
            <h3>Double Play</h3>
            <p>Internet / Mobile / TV</p>
            <div className="tripleIcons">
              <FaWifi />
              <FaMobileAlt />
              <FaTv />
            </div>
          </div>

          <div className="packageCard triplePlayCard" onClick={() => setActivePackage("triple")}>
            <h3>Triple Play</h3>
            <p>Internet / Mobile / TV</p>
            <div className="tripleIcons">
              <FaWifi />
              <FaMobileAlt />
              <FaTv />
            </div>
          </div>
        </div>
      </section>

      {activePackage && (
        <div className="packageModalOverlay">
          <div className="packageModal tripleModal">
            <button className="closeModal" onClick={() => setActivePackage(null)}>
              ✕
            </button>

            {activePackage === "single" && (
              <>
                <h3>Internet</h3>
                <div className="tripleIcons">
                  <FaWifi />
                </div>
                {renderTripleCards(singlePlayInternet)}

                <h3 style={{ marginTop: "50px" }}>Entertainment TV</h3>
                <div className="tripleIcons">
                  <FaTv />
                </div>
                {renderTripleCards(singlePlayEntertainmentTV)}

                <h3 style={{ marginTop: "50px" }}>Mobile Phone</h3>
                <div className="tripleIcons">
                  <FaMobileAlt />
                </div>
                {renderTripleCards(singlePlayMobile, 1, false)}

              </>
            )}

            {activePackage === "double" && (
              <>
                <h3>Internet + Mobile</h3>
                <div className="tripleIcons">
                  <FaWifi />
                  <FaMobileAlt />
                </div>
                {renderTripleCards(doublePlayInternetMobile, 0)}

                <h3 style={{ marginTop: "50px" }}>Internet + Entertainment TV</h3>
                <div className="tripleIcons">
                  <FaWifi />
                  <FaTv />
                </div>
                {renderTripleCards(doublePlayInternetTV, 0)}
              </>
            )}

            {activePackage === "triple" && (
              <>
                <h3>Internet + Mobile + Entertainment TV</h3>
                <div className="tripleIcons">
                  <FaWifi />
                  <FaMobileAlt />
                  <FaTv />
                </div>
                {renderTripleCards(triplePlayCards, 0)}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PackagesSection;
