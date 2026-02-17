import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
