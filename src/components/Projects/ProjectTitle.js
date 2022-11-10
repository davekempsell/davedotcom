import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProjectTitle(title, activeIndex, updateIndex) {
  return (
    <div className='title'>
      <button 
        id="nav-button-left" 
        className="nav-button"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
        >
        <FontAwesomeIcon icon={faLeftLong} />
      </button>
        <h3>{title}</h3>
      <button 
        id="nav-button-right"
        className="nav-button"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}>
        <FontAwesomeIcon icon={faRightLong} />
      </button>
    </div>
  )
}