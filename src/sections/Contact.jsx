import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="section section-alt"
    >

      <div className="container">

        <div className="section-heading">
          <p>Let's Connect</p>

          <h2>
            Get In <span>Touch</span>
          </h2>
        </div>

        <div className="contact-card">

          <div className="contact-content">

            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <h3>
              Have a project in mind?
            </h3>

            <p>
              I'm always interested in new
              opportunities, projects and
              collaborations.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="btn btn-primary"
            >
              Send Me an Email
              <span>→</span>
            </a>

          </div>

          <div className="contact-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
              Facebook
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;