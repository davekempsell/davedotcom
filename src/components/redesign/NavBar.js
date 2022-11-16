import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../../NewApp.css'

export function NavBar() {
  const [naviconsState, setNaviconsState] = useState(false)

  function showNavicons() {
    if(naviconsState) {
      return (
        <div className="navicons mobile">
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
      )
    } else {
      return null;
    }
  }


  return (
    <div>
      <div className="nav-container">
        <img src='/images/favicon.ico' alt="glasses logo"></img>
        <button className="navicon">
          <FontAwesomeIcon id="navicon" icon={faNavicon} onClick={() => {
            if(naviconsState) {
              setNaviconsState(false)
            } else {
              setNaviconsState(true)
            }
          }}/>
        </button>
        <div className="navicons desktop">
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
        {showNavicons()}
      </div>
    </div>
  )
}

export default NavBar