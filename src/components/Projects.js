import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaCodeBranch } from 'react-icons/fa'
import { GrHeroku, GrNode } from 'react-icons/gr'
import { SiHandlebarsdotjs, SiMongodb, SiExpress, SiNetlify } from 'react-icons/si'

export function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-text">
        <h3>Projects</h3>
        <p>Here are some of the projects I've been working on recently:</p>
        <p id="project-detail-prompt">(Click on each project for more information)</p>
      </div>
      <div className="project-cards-container">

      <div id="dr-john-card" className="project-card" style={{ backgroundImage: `url(/images/drjohndotcom.png)`}}>
          <div className="project-title">
            <h2>DRJOHNTITTERINGTON.COM</h2>
          </div>
          <div className="project-hover-content" style={{backgroundColor: 'rgba(58, 75, 113, 0.9)'}}>
            <h2>Dr John Titterington</h2>
            <p>Creating a website for Dr Titterington's private practice. The site has been created in React, and hosted through AWS Amplify.</p>
            <div className="icons-container">
              <FaHtml5 className="tech-icon" id="html-icon" style={{color: 'rgb(227, 76, 38)'}}/>
              <FaCss3Alt className="tech-icon" id="css-icon" style={{color: 'rgb(38, 77, 228)'}}/>
              <FaReact className="tech-icon" id="react-icon" style={{color: 'rgb(97, 219, 251)'}}/>
              <GrNode className="tech-icon" id="node-icon" style={{color: 'rgb(60, 135, 58)'}}/>
              <FaAws className="tech-icon" id="aws-icon" style={{color: 'rgb(255, 153, 0)'}}/>
            </div>
            <Link id="dr-john-button"><FaCodeBranch/> in development</Link>
          </div>
        </div>
        
        <div id="lexicon-card" className="project-card" style={{ backgroundImage: `url(/images/lexicon-mobile.png)`}}>
          <div className="project-title">
            <h2>LEXICON</h2>
          </div>
          <div className="project-hover-content" style={{backgroundColor: 'rgba(83,141,78,0.9)'}}>
            <h2>LEXICON</h2>
            <p>Lexicon is a single page React app, based on Wordle, using a custom API. It was built to create an 'extra-hard' mode, for a more challenging playing experience.</p>
            <div className="icons-container">
              <FaHtml5 className="tech-icon" id="html-icon" style={{color: 'rgb(227, 76, 38)'}}/>
              <FaCss3Alt className="tech-icon" id="css-icon" style={{color: 'rgb(38, 77, 228)'}}/>
              <FaReact className="tech-icon" id="react-icon" style={{color: 'rgb(97, 219, 251)'}}/>
              <GrNode className="tech-icon" id="node-icon" style={{color: 'rgb(60, 135, 58)'}}/>
              <SiMongodb className="tech-icon" id="mongodb-icon" style={{color: 'rgb(77, 179, 61)'}}/>
              <SiExpress className="tech-icon" id="express-icon" style={{color: 'rgb(60, 60, 60)'}}/>
              <SiNetlify className="tech-icon" id="netlify-icon" style={{color: '#00C7B7'}}/>
            </div>
            <Link id="lexicon-button" to={'/lexicon'} target="_blank">Play Lexicon!</Link>
          </div>
        </div>

        <div id="gms-card" className="project-card" style={{ backgroundImage: `url(/images/gms-mobile.png)`}}>
          <div className="project-title">
            <h2>GMS CALCULATOR</h2>
          </div>
          <div className="project-hover-content" style={{backgroundColor: 'rgba(23,15,102,0.9)'}}>
            <h2>GMS CALCULATOR</h2>
            <p>GMS stands for 'Gold Medal Speed'. The calculator allows rowing coaches to compare the speeds of different boats across varying distances.</p>
            <div className="icons-container">
              <FaHtml5 className="tech-icon" id="html-icon" style={{color: 'rgb(227, 76, 38)'}}/>
              <FaCss3Alt className="tech-icon" id="css-icon" style={{color: 'rgb(38, 77, 228)'}}/>
              <FaReact className="tech-icon" id="react-icon" style={{color: 'rgb(97, 219, 251)'}}/>
              <GrNode className="tech-icon" id="node-icon" style={{color: 'rgb(60, 135, 58)'}}/>
              <SiNetlify className="tech-icon" id="netlify-icon" style={{color: '#00C7B7'}}/>
            </div>
            <Link id="gms-button" to={'/calculator'} target="_blank">Use calculator</Link>
          </div>
        </div>

        <div id="bean-card" className="project-card" style={{ backgroundImage: `url(/images/loyal-bean.png)`}}>
          <div className="project-title">
            <h2>LOYAL BEAN</h2>
          </div>
          <div className="project-hover-content" style={{backgroundColor: 'rgba(11,168,211,0.9)'}}>
            <h2>LOYAL BEAN</h2>
            <p>Loyal Bean was built during the Makers Academy bootcamp final project. It is a coffee shop loyalty app, built in React Native, using MongoDB Atlas.</p>
            <div className="icons-container">
              <FaHtml5 className="tech-icon" id="html-icon" style={{color: 'rgb(227, 76, 38)'}}/>
              <FaCss3Alt className="tech-icon" id="css-icon" style={{color: 'rgb(38, 77, 228)'}}/>
              <FaReact className="tech-icon" id="react-icon" style={{color: 'rgb(97, 219, 251)'}}/>
              <GrNode className="tech-icon" id="node-icon" style={{color: 'rgb(60, 135, 58)'}}/>
              <SiMongodb className="tech-icon" id="mongodb-icon" style={{color: 'rgb(77, 179, 61)'}}/>
              <SiExpress className="tech-icon" id="express-icon" style={{color: 'rgb(60, 60, 60)'}}/>
              <GrHeroku className="tech-icon" id="heroku-icon" style={{color: 'rgb(103, 98, 166)'}}/>
            </div>
            <a id="bean-button" href='https://github.com/davekempsell/bean-app' target="_blank" rel="noreferrer">
              View Github
            </a>
          </div>
        </div>

        <div id="tastebook-card" className="project-card" style={{ backgroundImage: `url(/images/tastebook1.png)`}}>
          <div className="project-title">
            <h2>TASTEBOOK</h2>
          </div>
          <div className="project-hover-content" style={{backgroundColor: 'rgba(164,118,166,0.9)'}}>
            <h2>TASTEBOOK</h2>
            <p>Tastebook was a Makers Academy group project, creating a social media app. The project involved Agile practices and using Git version control.</p>
            <div className="icons-container">
              <FaHtml5 className="tech-icon" id="html-icon" style={{color: 'rgb(227, 76, 38)'}}/>
              <FaCss3Alt className="tech-icon" id="css-icon" style={{color: 'rgb(38, 77, 228)'}}/>
              <SiHandlebarsdotjs className="tech-icon" id="handlebars-icon" style={{color: 'rgb(0,0,0)'}}/>
              <GrNode className="tech-icon" id="node-icon" style={{color: 'rgb(60, 135, 58)'}}/>
              <SiMongodb className="tech-icon" id="mongodb-icon" style={{color: 'rgb(77, 179, 61)'}}/>
            </div>
            <a id="tastebook-button" href='https://github.com/davekempsell/tastebook' target="_blank" rel="noreferrer">
              View Github
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
