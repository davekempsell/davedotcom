import '../../NewApp.css'
import Filler from './Filler';
import NavBar from './NavBar';
import Introduction from './Introduction';
import MoreInfo from './MoreInfo';
import Experience from "./Experience";

export function Home() {
  return (
    <div className="home-container">
      {NavBar()}
      <div className="main-content-container">
        {Introduction()}
        {MoreInfo()}
        {Experience()}
        <div className="projects-container">
          <div className="projects-text">
            <h3>Projects</h3>
            <p>Here are some of the projects I've been working on recently:</p>
          </div>
          <div className="project-cards-container">
            <div className="project-card">
              <h3>Project Name</h3>
            </div>
            <div className="project-card">
              <h3>Project Name</h3>
            </div>
            <div className="project-card">
              <h3>Project Name</h3>
            </div>
            <div className="project-card">
              <h3>Project Name</h3>
            </div>
          </div>
        </div>
      </div>
      {Filler()}
    </div>
  )
}

export default Home;