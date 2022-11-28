import { HiArrowNarrowDown } from 'react-icons/hi'
import NewNavBar from './NewNavBar'

export default function FullPageHeader(title) {
  return (
    <div className="full-page-header-container" style={{backgroundImage: "url(/images/code-background.png)"}}>
      <NewNavBar/>
      <h1>{title}</h1>
      <HiArrowNarrowDown id="down-arrow" />
    </div>
  )
}