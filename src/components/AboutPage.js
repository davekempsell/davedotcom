import NavBar from "./NavBar";
import Footer from "./Footer";

function About() {
  return (
    <div className="about-me-container">
      <div className="about-image" style={{ backgroundImage: `url(/images/henley-eight.webp)`}}></div>
      <div className="about-text">
        <h2 id="about-title">ABOUT ME</h2>
        <h4>Before retraining in software development, I spent over a decade working within performance sport.</h4>
        <p>I spent a number of years competing in rowing, representing England in 2010 and 2012. In my career as an athlete I also won National Championship medals, set a British Record on the Concept2 rowing machine, and won Henley Royal Regatta in 2012.</p>
        <p>I retired due to injury in 2013, and started coaching other athletes, moving out to the United States in 2016 to coach at Washington State University in the NCAA.</p>
      </div>
      <div className="about-image" style={{ backgroundImage: `url(/images/snake-rowing.png)`}}></div>
      <div className="about-text">
        <p>My time spent working in high-performing sports teams had led to a seamless transition into working in Agile development teams. I'm a dedicated team player, and thrive in collaborative environments with other driven people.</p>
        <p>Competing at a high level in any sport requires resilience, and one of my biggest assets I can take from my time as an athlete is a growth-mindset. I learnt to see challenges as opportunities, and discovered that anything was achievable, and with the right attitude and dedication, it was a question of <i>when</i>, not <i>if</i>, you achieve success.</p>
      </div>
      <div id="profile-pic" className="about-image" style={{ backgroundImage: `url(/images/pinktshirtprofilepic.jpeg)`}}></div>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="home-container">
      {NavBar()}
      <div className="main-content-container">
        {About()}
        {Footer()}
      </div>
    </div>
  )
}

export default AboutPage;