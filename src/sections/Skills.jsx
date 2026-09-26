import {
  FaReact,
  FaLaravel,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Laravel",
    icon: <FaLaravel />,
  },
  {
    name: "ASP.NET",
    icon: <SiDotnet />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-alt">

      <div className="container">

        <div className="section-heading">
          <p>My Toolbox</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;