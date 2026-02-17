import profilePhoto from "../assets/profile.jpg";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Frontend Developer</h1>
          <p>
            I develop clean, responsive, and scalable web applications using
            React and TypeScript.
          </p>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
        </div>

        <div className="hero-image">
          <img src={profilePhoto} alt="Volodymyr Mandziuk" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
