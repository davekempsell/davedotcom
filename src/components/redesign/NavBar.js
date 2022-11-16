import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import '../../NewApp.css'

export function NavBar() {
  return (
    <div className="nav-container">
      <img src='/images/favicon.ico' alt="glasses logo"></img>
      <div className="navicon">
        <FontAwesomeIcon id="navicon" icon={faNavicon} />
      </div>
    </div>
  )
}

export default NavBar