import AdmissionCTA from "../Home/AdmissionCTA"
import HeroSection from "../Home/HeroSection"
import QuickLinks from "../Home/QuickLinks"
import StatsSection from "../Home/StatsSection"

const Home = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      {/* <QuickLinks /> */}
      <AdmissionCTA />
    </main>
  )
}

export default Home
