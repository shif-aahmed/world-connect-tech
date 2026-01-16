import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import LiveSportsSection from "../components/LiveSportsSection/LiveSportsSection";
import PackagesSection from "../components/PackagesSection/PackagesSection";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <FeaturesSection />
      <LiveSportsSection />

      <PackagesSection /> 
    </>
  );
};

export default Home;
