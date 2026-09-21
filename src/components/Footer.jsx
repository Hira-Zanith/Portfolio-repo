import socials from "../data/socials";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h3>Phanith Portfolio</h3>

      <p>
        Frontend Developer | React | Laravel | ASP.NET
      </p>

      <div className="socials">
        <a href="https://github.com">
          <FaGithub size={30} />
        </a>

        <a href="https://facebook.com">
          <FaFacebook size={30} />
        </a>

        <a href="https://linkedin.com">
          <FaLinkedin size={30} />
        </a>
      </div>

      <p>© 2026 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;