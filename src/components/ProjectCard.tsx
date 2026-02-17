import "../styles/projectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  github: string;
  live: string;
};

const ProjectCard = ({
  title,
  description,
  github,
  live,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-card-buttons">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
