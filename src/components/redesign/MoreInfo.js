import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faArrowPointer, faFileCode as faSolidFile } from "@fortawesome/free-solid-svg-icons"; 
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faReact, faNode } from "@fortawesome/free-brands-svg-icons";

function MoreInfo() {
  return (
    <div className="more-info-container">
      <div className="devices-image" style={{ backgroundImage: `url(/images/devices-dk.png)`}}>
      </div>
      <div className="more-info-content">
        <div className="more-info-text">
          <p>Some stuff about my career and journey, etc etc. Ideally this will be a couple of sentences.</p>
          <p>List out some reasons why I'd be a great person to hire, but keep it kind of humble brag style.</p>
          <p>And finally something else to finish off this section.</p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo