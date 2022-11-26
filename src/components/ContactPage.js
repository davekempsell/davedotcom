import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { HiArrowNarrowDown } from 'react-icons/hi'
import Footer from "./Footer"

function NewNavBar() {
  return (
    <div className='new-navigation-container'>
      <Link to={'/'}><AiFillHome/></Link>
      <Link to={'/'}><AiOutlineMenu/></Link>
    </div>
  )
}

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-me-container" style={{backgroundImage: "url(/images/code-background.png)"}}>
        {NewNavBar()}
        <h1>Contact Me.</h1>
        <HiArrowNarrowDown id="down-arrow" />
      </div>
      <div className="contact-details-container">
        <div className="get-in-touch-wrapper">
          <h1>Let's Work Together.</h1>
          <h1>Get In Touch.</h1>
        </div>
        <div className="contact-detail">
          <h3>EMAIL ADDRESS</h3>
          <p>davekempsell87@gmail.com</p>
        </div>
        <div className="contact-detail">
          <h3>PHONE NUMBER</h3>
          <p>07850 422328</p>
        </div>
        <div className="contact-detail">
          <h3>MY ADDRESS</h3>
          <p>Bedford, UK.</p>
        </div>
      </div> 
    </div>
  )
}

export default function ContactPage() {
  return (
    // <div className="home-container">
    //   {NavBar()}
      <div className="new-home-container">
        {Contact()}
        {Footer()}
      </div>
    // </div>
  )
}