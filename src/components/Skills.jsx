import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="section"
      data-aos="zoom-in"
    >
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="card skill-card"
            >
              <Icon size={50} />

              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;