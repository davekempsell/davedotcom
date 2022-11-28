export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details-container">
        <div className="get-in-touch-wrapper">
          <h1>Let's Work Together.</h1>
          <h1>Get In Touch.</h1>
        </div>
        <div id="contact-details-wrapper">
          <a href="mailto: davekempsell87@gmail.com" target="_blank" rel="noreferrer" className="contact-detail">
            <h3>EMAIL ADDRESS</h3>
            <p>davekempsell87@gmail.com</p>
          </a>
          <a href="tel: 07850422328" target="_blank" rel="noreferrer" className="contact-detail" id="mobile-view-number">
            <h3>PHONE NUMBER</h3>
            <p>07850 422328</p>
          </a>
          <a href="tel: 07850422328" className="contact-detail" id="desktop-view-number">
            <h3>PHONE NUMBER</h3>
            <p>07850 422328</p>
          </a>
          <a href="https://www.google.com/maps/place/Bedford/@52.1390716,-0.5215378,12z/data=!3m1!4b1!4m5!3m4!1s0x4877b6c6c66c36cd:0x125df4c90cabaf30!8m2!3d52.1386394!4d-0.4667782" target="_blank" rel="noreferrer" className="contact-detail">
            <h3>MY ADDRESS</h3>
            <p>Bedford, UK.</p>
          </a>
        </div>
      </div> 
    </div>
  )
}
