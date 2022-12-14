import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'

export function NavBar() {
  const navicons = view => {
    return (
      <div className={`navicons ${view}`}>
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
  }


  return (
    <div>
      <div className="nav-container">
        <div className="home-icon">
        <Link id="home" to={'/'}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        </div>
        {navicons('mobile')}
        {navicons('desktop')}
      </div>
    </div>
  )
}

export default NavBar