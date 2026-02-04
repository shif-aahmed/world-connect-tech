
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import LiveSportsSection from "../components/LiveSportsSection/LiveSportsSection";
import PackagesSection from "../components/PackagesSection/PackagesSection";
import "./home.css";

const Home = () => {
  return (
    <>
    <div className="home-bg">
      <HeroBanner />
      <FeaturesSection />
      <LiveSportsSection />
      <PackagesSection />
    </div>
    </>
  );
};

export default Home;
