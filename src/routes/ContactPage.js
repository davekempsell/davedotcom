import FullPageHeader from '../components/FullPageHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
      <div className="new-home-container">
        {FullPageHeader('Contact Me.')}
        <Contact />
        <Footer />
      </div>
  )
}