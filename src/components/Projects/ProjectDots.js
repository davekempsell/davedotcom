import { faCircle as solidCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function ProjectDots(activeIndex, children) {

  return (
    <div className="dots-container">
      {children.map((element,index) => {
        if(index === activeIndex) {
          return <FontAwesomeIcon icon={solidCircle} key={element}></FontAwesomeIcon>
        } else {
          return <FontAwesomeIcon icon={faCircle} key={element}></FontAwesomeIcon>
        }
      })}
    </div>
  )
}