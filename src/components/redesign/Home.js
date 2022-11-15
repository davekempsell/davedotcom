import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import '../../NewApp.css'
import Filler from './Filler';
import NavBar from './NavBar';
import Introduction from './Introduction';
import MoreInfo from './MoreInfo';

export function Home() {
  return (
    <div className="home-container">
      {NavBar()}
      <div className="main-content-container">
        {Introduction()}
        {MoreInfo()}
        <div className="experience-container">
          <div className="frontend-experience">
            <div className="frontend-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="frontend-text">
              <h3>Frontend Experience</h3>
              <p>I have built things with stuff.</p>
            </div>
          </div>
        </div>
      </div>
      {Filler()}
    </div>
  )
}

export default Home;