import '../../NewApp.css'
import Filler from './Filler';
import NavBar from './NavBar';

export function Home() {
  return (
    <div className="home-container">
      {NavBar()}
      <div className="main-content-container">
        <div className="introduction-container">
          <div className="introduction-text">
            <h2>Hi, I’m Dave, I’m a software engineer and frontend developer</h2>
            <p>I like to make cool stuff and put it on the internet.</p>
          </div>
          <img src='/images/bitmoji-head.png' alt="daves head"></img>
        </div>
      </div>
      {Filler()}
    </div>
  )
}

export default Home;