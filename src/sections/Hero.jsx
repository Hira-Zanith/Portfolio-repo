import profileImage from "../assets/profile.jpg";

import { 
  FaGithub, 
  FaTelegram, 
  FaFacebook 
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-bg-circle circle-one" />
      <div className="hero-bg-circle circle-two" />

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-small">
             Hello, I'm
          </p>

          <h1>
            Phanith
            <span>.</span>
          </h1>

          <h2>
            Backend & Web Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly
            web applications using React, Laravel,
            ASP.NET and JavaScript.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/Hira-Zanith"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://t.me/Hirazanith"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=61590744536636"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

      
        <div className="hero-visual">
          {/* Profile Photo */}
          <div className="profile-wrapper">
            <div className="profile-glow"></div>

            <img
              src={profileImage}
              alt="Phanith - Web Developer"
              className="profile-image"
            />

            <div className="profile-badge">
              <span>●</span> Available for work
            </div>
          </div>

          {/* Keep your code card */}
          <div className="code-card">
            <div className="code-header">
              <span />
              <span />
              <span />
            </div>

            <div className="code-body">
              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="indent">
                name:{" "}
                <span className="code-green">
                  "Phanith"
                </span>,
              </p>

              <p className="indent">
                role:{" "}
                <span className="code-green">
                  "Developer"
                </span>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent-more">
                <span className="code-green">"React"</span>,
              </p>

              <p className="indent-more">
                <span className="code-green">"Laravel"</span>,
              </p>

              <p className="indent-more">
                <span className="code-green">"ASP.NET"</span>
              </p>

              <p className="indent">]</p>

              <p>{"}"}</p>
            </div>
          </div>
        </div>


      </div>

      <a
        href="#about"
        className="scroll-down"
      >
        <span>Scroll Down</span>
        ↓
      </a>

    </section>
  );
}

export default Hero;