import FullPageHeader from "../components/FullPageHeader"
import About from "../components/About"
import Footer from "../components/Footer"

export default function AboutPage () {
  return (
    <div className="new-home-container">
      {FullPageHeader('About Me.')}
      {About()}
      {Footer()}
    </div>
  )
}