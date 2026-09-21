import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="fade-up">
      <img src={profile} alt="Profile" className="profile-img" />

      <h1>Hi, I'm Phanith</h1>

      <h2>Frontend & Web Developer</h2>

      <p>
        Passionate developer building modern websites using React,
        Laravel, ASP.NET, JavaScript and MySQL.
      </p>

      <div className="buttons">
        <a href="/cv.pdf" download>
          <button className="primary-btn">
            Download CV
          </button>
        </a>

        <a href="#contact">
          <button className="secondary-btn">
            Contact Me
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;