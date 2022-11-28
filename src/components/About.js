import { FaHtml5, FaCss3Alt, FaReact, FaAws } from 'react-icons/fa'
import { GrHeroku, GrNode } from 'react-icons/gr'
import { SiHandlebarsdotjs, SiMongodb, SiExpress, SiJavascript, SiGithub } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'

export default function About() {
  return (
    <div className="about-me-container">
      <div className="about-text-container" id="get-to-know-me">
        <h1>Get to know me.</h1>
        <h4>I'm a full-stack developer, taking ideas from conception to completion.</h4>
        <p>Before retraining in software development, I spent over a decade within performance sport, as an athlete and coach. I pride myself on having high-standards and strong attention to detail.</p>
        <p>My experience in high-level sport has taught me the importance of approaching tasks with a growth-mindset, embracing challenges, and having the confidence to overcome difficulties along the way.</p>
      </div>
      <div className="image-wrapper">
        <div id="profile-pic" style={{ backgroundImage: `url(/images/pinktshirt.png)`}}/>
      </div>
      <div className='about-text-container' id="my-journey">
        <h1>My Journey.</h1>
        <div id="my-journey-wrapper">
          <p>In 2022, I left my career in sport to pursue a career in software development. I wanted to work in a role where I was responsible for my own performance, rather than that of others, and utilise my skills as an individual contributor that brought me success as an athlete.</p>
          <p>I enrolled in a 12-week, full-time software engineering bootcamp with Makers Academy. The course involved learning technical skills such as OOP, TDD, pair programming, as well as picking up a variety of new technologies.</p>
          <p>I love to work on new projects and develop my skills further. Since graduating from the Makers course, I have been doing freelance work, mostly building in React, and working with serverless architecture through AWS.</p>
          <p>I'm currently looking for an opportunity within an organisation where I can continue to learn and grow. If you're reading this, and think I sound like a good fit for your company, please do <a href="/contact" target="_blank" rel="noreferrer">Get In Touch</a>.</p>
        </div>
      </div>
      <div className='about-text-container' id="sport-career">
        <div id="henley-eight" style={{ backgroundImage: `url(/images/henley-crew.png)`}}/>
        <h1>Sport Career.</h1>
        <p>I spent a number of years competing in rowing, representing England in 2010 and 2012.  </p>
        <p>In my career as an athlete I also won National Championship medals, set a British Record on the Concept2 rowing machine, and won Henley Royal Regatta in 2012.</p>
        <p>I retired due to injury in 2013, and started coaching other athletes, moving out to the United States in 2016 to coach the Women's Rowing Team at Washington State University in the NCAA.</p>
      </div>
      <div className='about-text-container' id="skills">
        <h1>Skills.</h1>
        <div className='skills-wrapper'>
          <h3>Front-end Web Development.</h3>
          <p>I enjoy creating new websites and single page apps, using React for its scalability and components. I love to experiment with new design ideas and see what I've created come to life in the browser.</p>
          <p>Tech stack:</p>
          <div className="icons-container">
            <FaHtml5 className="tech-icon" id="html-icon" style={{color: 'rgb(227, 76, 38)'}}/>
            <FaCss3Alt className="tech-icon" id="css-icon" style={{color: 'rgb(38, 77, 228)'}}/>
            <SiJavascript className='tech-icon' id="js-icon" style={{color: '#F0DB4F'}}/>
            <FaReact className="tech-icon" id="react-icon" style={{color: 'rgb(97, 219, 251)'}}/>
            <SiHandlebarsdotjs className="tech-icon" id="handlebars-icon" style={{color: 'rgb(0,0,0)'}}/>
            <SiGithub className="tech-icon" id="github-icon" style={{color: 'rgb(0,0,0)'}}/>
          </div>
        </div>
        <div className='skills-wrapper'>
          <h3>Full-Stack Software Development.</h3>
          <p>I have experience of building applications using the whole tech stack, creating APIs, and utilising cloud-based serverless architecture.</p>
          <p>Tech stack:</p>
          <div className="icons-container">
              <GrNode className="tech-icon" id="node-icon" style={{color: 'rgb(60, 135, 58)'}}/>
              <DiRuby className='tech-icon' id='ruby-icon' style={{color: '#A91401'}}/>
              <SiMongodb className="tech-icon" id="mongodb-icon" style={{color: 'rgb(77, 179, 61)'}}/>
              <FaAws className="tech-icon" id="aws-icon" style={{color: 'rgb(255, 153, 0)'}}/>
              <SiExpress className="tech-icon" id="express-icon" style={{color: 'rgb(60, 60, 60)'}}/>
              <GrHeroku className="tech-icon" id="heroku-icon" style={{color: 'rgb(103, 98, 166)'}}/>
              <SiGithub className="tech-icon" id="github-icon" style={{color: 'rgb(0,0,0)'}}/>
          </div>
        </div>
        <div className='skills-wrapper'>
          <h3>Excellent Communication.</h3>
          <p>Throughout my career, communication has always been key. Whether discussing a client's requirements, understanding a young athlete's motivations, or discussing how to overcome blockers within a develpment team, I've always ensured I communicate clearly and effectively.</p>
          <h3>Teamwork.</h3>
          <p>I have over a decade of experience of operating within high performing teams. I work best in collaborative environments, where team members hold each other accountable and work together towards a common goal.</p>
        </div>
      </div>
    </div>
  )
}
