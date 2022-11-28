import FullPageHeader from "../components/FullPageHeader"
import Footer from "../components/Footer"


export default function AboutPage () {
  return (
    <div className="new-home-container">
      {FullPageHeader('My CV.')}
      <a href='DJK-CV.pdf' download>Download CV</a>
      {Footer()}
    </div>
  )
}