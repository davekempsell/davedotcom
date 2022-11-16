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
              <a id="lexicon-button" href="https://lexicon-by-dave.herokuapp.com/" target="_blank" rel="noreferrer">
                Play Lexicon!
              </a>
            </div>
          </div>
        </div>
        <div id="gms-card" className="project-card" style={{ backgroundImage: `url(/images/gms-mobile.png)`}}>
          <div className="project-title">
            <h2>GMS CALCULATOR</h2>
            <div className="project-hover-content">
              <h2>GMS CALCULATOR</h2>
              <p>GMS stands for 'Gold Medal Speed'. The calculator allows rowing coaches to compare the speeds of different boats across varying distances.</p>
              <a id="gms-button" href="https://gms-calculator.herokuapp.com/" target="_blank" rel="noreferrer">
                Use calculator
              </a>
            </div>
          </div>
        </div>
        <div id="bean-card" className="project-card" style={{ backgroundImage: `url(/images/loyal-bean.png)`}}>
          <div className="project-title">
            <h2>LOYAL BEAN</h2>
            <div className="project-hover-content">
              <h2>LOYAL BEAN</h2>
              <p>Loyal Bean was built during the Makers Academy bootcamp final project. It is a coffee shop loyalty app, built in React Native with Node.js/Express backend server, using MongoDB Atlas.</p>
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
