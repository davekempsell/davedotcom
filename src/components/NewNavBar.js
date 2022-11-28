import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { IoIosClose } from 'react-icons/io'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function NewNavBar() {
  const [popUpState, setPopUpState] = useState(false)

  function navLink(route, title) {
    return (
      <>
      <button id="nav-button" onClick={hidePopUp}>
        <NavLink id="nav-link" to={route} style={({isActive}) => 
            isActive
            ?{color: 'black'}
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
          {/* {navLink('/projects', 'PROJECTS')} */}
          {navLink('/contact', 'CONTACT')}
        </div>
        <div id="pop-up-socials-wrapper">
        <a href='https://www.linkedin.com/in/dave-kempsell/' target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href='https://github.com/davekempsell' target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
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