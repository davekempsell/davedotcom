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
        <div className="more-info-container">
          <div className="devices-images">
            <img id="devices-image" src='/images/devices-transparent.png' alt="black and white, various screens"></img>
          </div>
          <div className="more-info-content">
            <div className="more-info-text">
              <p>Some stuff about my career and journey, etc etc. Ideally this will be a couple of sentences.</p>
              <p>List out some reasons why I'd be a great person to hire, but keep it kind of humble brag style.</p>
              <p>And finally something else to finish off this section.</p>
            </div>
          </div>
        </div>
      </div>
      {Filler()}
    </div>
  )
}

export default Home;