import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { HiArrowNarrowDown } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'
import Footer from "./Footer"

function NewNavBar() {
  const [popUpState, setPopUpState] = useState(false)

  function navLink(route, title) {
    return (
      <>
      <button id="nav-button" onClick={hidePopUp}>
        <NavLink id="nav-link" to={route} style={({isActive}) => 
            isActive
            ?{color: 'var(--secondary-color)'}
            :{color: 'white'}
          }>
            <h1>{title}.</h1>
        </NavLink>
      </button>
      </>
    )
  }

  const PopUp = () => {
    if(popUpState) {
    return (
      <div className="nav-pop-up">
        <button onClick={hidePopUp}><IoIosClose/></button>
        <div className='nav-links-container'>
          {navLink('/', 'HOME')}
          {navLink('/about', 'ABOUT')}
          {navLink('/projects', 'PROJECTS')}
          {navLink('/contact', 'CONTACT')}
        </div>
      </div>
    )
    } else {
      return <></>
    }
  }

  function showPopUp() {
    setPopUpState(true)
  }

  function hidePopUp() {
    setPopUpState(false)
  }

  return (
    <>
    <PopUp/>
    <div className='new-navigation-container'>
      <Link to={'/'}><AiFillHome/></Link>
      <button onClick={showPopUp}><AiOutlineMenu/></button>
    </div>
    </>
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