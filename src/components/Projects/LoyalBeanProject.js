import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectTitle } from "./ProjectTitle";

export function LoyalBeanProject (activeIndex, updateIndex) {

  return (
    <div className="project-container">
      {ProjectTitle('LOYAL BEAN', activeIndex, updateIndex)}
      <div className="project-content">
        <div className='images'>
          <div className="project-image" style={{ backgroundImage: `url(/images/samsung-bean1.png)`}}></div>
          <div className="project-image" style={{ backgroundImage: `url(/images/iphone-bean.png)`}}></div>
        </div>
        <div className='description'>
          <div className="project-description">
            <p>Loyal Bean was made during the final group project on the Makers Academy bootcamp.</p>
            <p>The app was designed to work as a digital loyalty card for independant coffee stores and their customers. Customers could collect points, or beans, everytime they bought a coffee, by getting their QR code scanned by the barista.</p>
            <p>This was achieved by creating two separate mobile apps using React Native. Both apps connected to a MongoDB Atlas database, through an Express server, hosted on Heroku.</p>
            <p>The project lasted 10 days, with the first priority being learning how to build a React Native app, as it was a technology none of us had used before. During the project we worked as an Agile team, with daily stand-ups, pairing each day, and carrying out code-reviews on all pull requests. </p>
          </div>
          <a href="https://github.com/davekempsell/bean-app"  target="_blank" rel="noreferrer">
            <FontAwesomeIcon id="github" icon={faGithub} />
            <p>Check out the code on Github</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoyalBeanProject