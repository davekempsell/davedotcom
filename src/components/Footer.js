import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";

export function Footer() {

  return (
    <div className="footer-container">
      <div className="contact-icons">
        <a href='https://github.com/davekempsell' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/dave-kempsell/' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto: davekempsell87@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className ="built-by-text">
        <p>Site built by Dave Kempsell - 2022</p>
        <div className="built-in-react">
          <p>Made with</p>
          <FontAwesomeIcon id="react-icon" icon={faReact} />
          <p>React.js</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
