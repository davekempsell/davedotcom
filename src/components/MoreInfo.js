import { NavLink } from 'react-router-dom';

function MoreInfo() {
  return (
    <div className="more-info-container">
      <div className="devices-image" style={{ backgroundImage: `url(/images/devices2.png)`}}>
      </div>
      <div className="more-info-content">
        <div className="more-info-text">
          <p>I have always had a strong attention to detail and a desire to innovate. I write code because I love solving problems, finding the best solutions to user needs, and pushing myself to continually learn and develop.</p>
          <p>I'm always pushing myself out of my comfort zone to learn something new. So after a decade working in high-performance sport, it was time for my next challenge.</p>
          <p>In early 2022, I enrolled in a 12 week, full-time bootcamp with <a href="https://makers.tech/" target="_blank" rel="noreferrer">Makers Academy</a>. Graduating from the bootcamp has given me a strong understanding of object-oriented programming and test-driven development, as well as working within Agile teams.</p>
          <NavLink to={"/about"}>Read more...</NavLink>
          <p>Here's a closer look at my skills:</p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo