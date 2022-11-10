import { ProjectTitle } from "./ProjectTitle";
import { ProjectDots } from "./ProjectDots";

export function GmsProject(activeIndex, updateIndex, children) {

  return (
    <div className="project-container">
      {ProjectTitle('GMS CALCULATOR', activeIndex, updateIndex)}
      {ProjectDots(activeIndex, children)}
      <div className="project-content">
        <div className='images'>
        <div className="project-image" style={{ backgroundImage: `url(/images/gms-calculator.png)`}}></div>
        </div>
        <div className='description'>
          <div className="project-description">
            <p>GMS stands for 'Gold Medal Speed', a measurement used in rowing to compare different types of boats across varying distances. The app was built to make it easy to calculate this when coaching rowing sessions.</p>
            <p>The calculator allows quick selection of the boat type through a drop down menu, and the distance and time of the piece can be entered through number inputs. The app then displays the calculated boat speed and percentage of the gold medal speed for that boat type, from a data object stored within the program.</p>
            <p>The GMS Calculator was built in React, using node.js, hosted through Heroku.</p>
          </div>
          <a href="https://gms-calculator.herokuapp.com/"  target="_blank" rel="noreferrer">
            <img src="../images/gms-logo-white.png" alt="gms calculator logo"/>
            <p>Use the calculator</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GmsProject