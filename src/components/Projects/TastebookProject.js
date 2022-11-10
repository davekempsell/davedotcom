import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectDots } from "./ProjectDots";

export function TastebookProject (activeIndex, updateIndex, children) {

  return (
    <div className="project-container">
      {ProjectTitle('TASTEBOOK', activeIndex, updateIndex)}
      {ProjectDots(activeIndex, children)}
      <div className="project-content">
        <div className='images'>
          <div className="project-image" style={{ backgroundImage: `url(/images/tastebook2.png)`}}></div>
        </div>
        <div className='description'>
          <div className="project-description">
            <p>Tastebook was a group project during the Makers Academy bootcamp where we modified an existing code base to develop a Facebook clone. Tastebook was designed as a social media site for people to share their favourite recipes, leaving likes and comments, with each user having a profile page where all of their recipes could be found.</p>
            <p>The project revolved around Agile practices and ceremonies, with daily stand-ups and retros, and used a kanban board for assigning and tracking work tickets within the group.</p>
            <p>Tastebook was one of the first group projects of the Makers bootcamp, and as such presented the challenge of varying levels of programming skills and experience within the group. I was able to ensure everyone was able to make contributions by creating a range of work tickets, and allocating them appropriately.</p>
            <p>The Tastebook app was built using NodeJS and Handlebars, with a MongoDB database. Testing was carried out using Jest and Cypress.</p>  
          </div>
          <a href="https://github.com/davekempsell/tastebook"  target="_blank" rel="noreferrer">
            <FontAwesomeIcon id="github" icon={faGithub} />
            <p>Check out the code on Github</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TastebookProject