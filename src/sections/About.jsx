function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-card">
            <div className="about-number">
              01
            </div>

            <h3>Who I Am</h3>

            <p>
              I'm a passionate IT student and web
              developer interested in building
              useful and modern digital products.
            </p>

            <p>
              I enjoy learning new technologies,
              solving problems and turning ideas
              into real applications.
            </p>
          </div>

          <div className="about-card">
            <div className="about-number">
              02
            </div>

            <h3>What I Do</h3>

            <p>
              I focus on frontend and backend
              web development with modern tools
              and frameworks.
            </p>

            <div className="about-tags">
              <span>React</span>
              <span>Laravel</span>
              <span>ASP.NET</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;