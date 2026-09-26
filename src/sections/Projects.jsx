import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="container">

        <div className="section-heading">
          <p>My Recent Work</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-top">

                <span className="project-number">
                  0{index + 1}
                </span>

                <div className="project-links">

                  <a
                    href={project.github}
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.demo}
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;