import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'

export function Footer() {

  return (
    <div className="footer-container">
      <div className="footer-nav-links">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
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
        <p>© Dave Kempsell 2022 | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
