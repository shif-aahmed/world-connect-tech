import "./RetailersSection.css";

import retailer1 from "../../assets/frontier.png";
import retailer2 from "../../assets/brightspeed.png";
import retailer3 from "../../assets/earthlink.png";
import retailer4 from "../../assets/kinetic.png";
import retailer5 from "../../assets/optimum.png";
import retailer6 from "../../assets/spectrumbusiness.png";

const RetailersSection = () => {
  const retailers = [
    retailer5,
    retailer6,
    retailer1,
    retailer2,
    retailer3,
    retailer4,
  ];

  return (
    <section className="retailersSection">
      <h2 className="retailersHeading">Our Retailers</h2>

      <div className="retailersContainer">
        {retailers.map((logo, index) => (
          <div key={index} className="retailerLogo">
            <img src={logo} alt={`Retailer ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailersSection;
