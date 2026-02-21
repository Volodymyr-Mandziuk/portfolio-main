import ProjectCard from "../components/ProjectCard";
import "../styles/projectSection.css";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Weather App"
            description="Responsive weather application using API integration and modern UI."
            github="https://github.com/Volodymyr-Mandziuk/weather-app"
            live="https://my-portfolio-841e6.web.app/weather"
          />

          <ProjectCard
            title="URL Shortener"
            description="Full-stack URL shortener with Firebase backend and redirect logic."
            github="https://github.com/Volodymyr-Mandziuk/url-shortener"
            live="https://my-portfolio-841e6.web.app/url-shortener "
          />

          <ProjectCard
            title="Todo List"
            description="Task management application with dynamic state handling."
            github="https://github.com/Volodymyr-Mandziuk/todolist"
            live="https://my-portfolio-841e6.web.app/todolist"
          />

          <ProjectCard
            title="Colors App"
            description="Interactive color palette generator built with React and TypeScript."
            github="https://github.com/Volodymyr-Mandziuk/color-selection"
            live="https://my-portfolio-841e6.web.app/colors"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
