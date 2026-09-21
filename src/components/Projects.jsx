import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="section"
      data-aos="fade-up"
    >
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;