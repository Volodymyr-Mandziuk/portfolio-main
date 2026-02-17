import "../styles/techstack.css";
import { FaReact, FaGithub, FaFire } from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";

const TechStackSection = () => {
  const techCategories = {
    Frontend: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vite", icon: <SiVite /> },
    ],
    Backend: [{ name: "Firebase", icon: <FaFire /> }],
    Tools: [{ name: "GitHub", icon: <FaGithub /> }],
  };
  return (
    <section className="tech-stack">
      <div className="container">
        <h2>Tech Stack</h2>
        {Object.entries(techCategories).map(([category, techs]) => (
          <div key={category} className="tech-category">
            <h3 className="tech-category-title">{category}</h3>

            <div className="tech-stack-list">
              {techs.map((tech) => (
                <div key={tech.name} className="tech-badge">
                  <span className="tech-icon">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
