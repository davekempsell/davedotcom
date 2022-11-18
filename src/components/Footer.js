import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
// import { downloadCV } from "./downloadCV";

export function Footer() {

  const downloadCV = () => {
    fetch('DJK-CV.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'DJK-CV.pdf';
          alink.click();
      })
    })
  }
  return (
    <div className="footer-container">
      <button id="download-cv-button" onClick={downloadCV}>Download CV</button>
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
