import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt, FaReact, FaAws } from 'react-icons/fa'
import { GrHeroku, GrNode } from 'react-icons/gr'
import { SiHandlebarsdotjs, SiMongodb, SiExpress } from 'react-icons/si'

export function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-text">
        <h3>Projects</h3>
        <p>Here are some of the projects I've been working on recently:</p>
      </div>
      <div className="project-cards-container">

        <div id="lexicon-card" className="project-card" style={{ backgroundImage: `url(/images/lexicon-mobile.png)`}}>
          <div className="project-title">
            <h2>LEXICON</h2>
            <div className="project-hover-content">
              <h2>LEXICON</h2>
              <p>Lexicon is a single page React app, based on Wordle. It was built to create an 'extra-hard' mode, for a more challenging playing experience.</p>
              <div className="icons-container">
                <FaHtml5 className="tech-icon" id="html-icon" />
                <FaCss3Alt className="tech-icon" id="css-icon" />
                <FaReact className="tech-icon" id="react-icon" />
                <GrNode className="tech-icon" id="node-icon" />
                <GrHeroku className="tech-icon" id="heroku-icon" />
              </div>
              <Link id="lexicon-button" to={'/lexicon'}>Play Lexicon!</Link>
            </div>
          </div>
        </div>

        <div id="gms-card" className="project-card" style={{ backgroundImage: `url(/images/gms-mobile.png)`}}>
          <div className="project-title">
            <h2>GMS CALCULATOR</h2>
            <div className="project-hover-content">
              <h2>GMS CALCULATOR</h2>
              <p>GMS stands for 'Gold Medal Speed'. The calculator allows rowing coaches to compare the speeds of different boats across varying distances.</p>
              <div className="icons-container">
                <FaHtml5 className="tech-icon" id="html-icon" />
                <FaCss3Alt className="tech-icon" id="css-icon" />
                <FaReact className="tech-icon" id="react-icon" />
                <GrNode className="tech-icon" id="node-icon" />
                <FaAws className="tech-icon" id="aws-icon" />
              </div>
              <Link id="gms-button" to={'/gms-calculator'}>Use calculator</Link>
            </div>
          </div>
        </div>

        <div id="bean-card" className="project-card" style={{ backgroundImage: `url(/images/loyal-bean.png)`}}>
          <div className="project-title">
            <h2>LOYAL BEAN</h2>
            <div className="project-hover-content">
              <h2>LOYAL BEAN</h2>
              <p>Loyal Bean was built during the Makers Academy bootcamp final project. It is a coffee shop loyalty app, built in React Native with Node.js/Express backend server, using MongoDB Atlas.</p>
              <div className="icons-container">
                <FaHtml5 className="tech-icon" id="html-icon" />
                <FaCss3Alt className="tech-icon" id="css-icon" />
                <FaReact className="tech-icon" id="react-icon" />
                <GrNode className="tech-icon" id="node-icon" />
                <SiMongodb className="tech-icon" id="mongodb-icon" />
                <SiExpress className="tech-icon" id="express-icon" />
                <GrHeroku className="tech-icon" id="heroku-icon" />
              </div>
              <a id="bean-button" href='https://github.com/davekempsell/bean-app' target="_blank" rel="noreferrer">
                View Github
              </a>
            </div>
          </div>
        </div>

        <div id="tastebook-card" className="project-card" style={{ backgroundImage: `url(/images/tastebook1.png)`}}>
          <div className="project-title">
            <h2>TASTEBOOK</h2>
            <div className="project-hover-content">
              <h2>TASTEBOOK</h2>
              <p>Tastebook was a Makers Academy group project, creating a social media app. The project involved Agile practices and ceremonies with daily stand ups and retros, code reviews, and the use of a Kanban board.</p>
              <div className="icons-container">
                <FaHtml5 className="tech-icon" id="html-icon" />
                <FaCss3Alt className="tech-icon" id="css-icon" />
                <SiHandlebarsdotjs className="tech-icon" id="handlebars-icon" />
                <GrNode className="tech-icon" id="node-icon" />
                <SiMongodb className="tech-icon" id="mongodb-icon" />
              </div>
              <a id="tastebook-button" href='https://github.com/davekempsell/tastebook' target="_blank" rel="noreferrer">
                View Github
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
