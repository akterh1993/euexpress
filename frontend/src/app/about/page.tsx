import AboutHero from "./components/AboutHero";
import MissionSection from "./components/MissionSection";
import ValuesSection from "./components/ValuesSection";
import AIPoweredSection from "./components/AIPoweredSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <main>
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <AIPoweredSection />
      </main>
    </div>
  );
}
