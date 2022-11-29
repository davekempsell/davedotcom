import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export function Experience() {
  return (
    <div className="experience-container">
          <div className="experience-card" id="frontend-card">
            <div className="experience-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="experience-text">
              <h3>Frontend Experience.</h3>
              <p>I enjoy creating new websites and single page apps, using React for its scalability and components. I love to experiment with new design ideas and see what I've created come to life in the browser.</p>
            </div>
            <div className="languages-container">
              <h3>Languages</h3>
              <p>HTML, CSS, JavaScript, React.JS, React Native, Git</p>
            </div>
          </div>
          <div className="experience-card" id="backend-card">
            <div className="experience-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="experience-text">
              <h3>Full-Stack Experience.</h3>
              <p>I have experience of building applications using the whole tech stack, creating APIs, and utilising cloud-based serverless architecture.</p>
            </div>
            <div className="languages-container">
              <h3>Languages</h3>
              <p>Node.JS, Ruby, Python, MongoDB</p>
              <h3>Dev Tools</h3>
              <p>AWS, Heroku, PostmanAPI, MongoDB Atlas, Express</p>
            </div>
          </div>
        </div>
  )
}

export default Experience