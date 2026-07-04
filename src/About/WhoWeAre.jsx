import HeroBanner    from "./WhoWeAre/HeroBanner";
import MottoSection  from "./WhoWeAre/MottoSection";
import VisionSection from "./WhoWeAre/VisionSection";
import MissionSection from "./WhoWeAre/MissionSection";
import ValuesSection from "./WhoWeAre/ValuesSection";
import StatsSection  from "./WhoWeAre/StatsSection";
import Breadcrumb    from "../Contact/Breadcrumb";

const WhoWeAre = () => {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <HeroBanner />

      {/* Breadcrumb */}
      <Breadcrumb pages={["Home", "About Us", "Who We Are"]} />

      {/* Motto */}
      <MottoSection />

      {/* Vision */}
      <VisionSection />

      {/* Mission */}
      <MissionSection />

      {/* Core Values */}
      <ValuesSection />

      {/* Stats */}
      <StatsSection />

    </main>
  );
};

export default WhoWeAre;