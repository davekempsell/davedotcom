import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../App.css';

function Header() {
  return (
      <header className="App-header">
        <div className="header-menu">
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
          
        </div>
        
          <p>davekempsell.com</p>
        
        <div className="socials">
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
      </header>
  );
}

export default Header;