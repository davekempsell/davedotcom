import { HiArrowNarrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import NewNavBar from './NewNavBar'

export default function HomePageHeader() {
  return (
    <div className="full-page-header-container" style={{backgroundImage: "url(/images/code-background.png)"}}>
      <NewNavBar/>
      <div id="home-page-header-wrapper">
        <img id="dave-head" src='/images/bitmoji-head.png' alt="daves head"></img>
        <h3>Dave Kempsell</h3>
        <h1>Full-Stack Developer.</h1>
      </div>
      <HiArrowNarrowDown id="down-arrow" />
    </div>
  )
}