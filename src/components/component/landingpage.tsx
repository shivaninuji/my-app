import { FaChevronDown } from 'react-icons/fa'

const LandingPage = () => (
  <section id="landing-page" className="landing-page">
    <div className="container">
      <div className="main-message">
        <br /><br /><br /><br />
        <h2>Shivani N</h2>
        <h2>Hello 👋🏽</h2><br />
        <p>I am a CSE student who is passionate about learning and always excited about trying new things and gaining new experiences.</p>
        <br />
        <div className="intro-btn">
          <div className="cta">
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
          <div className="cta">
            <a href="#projects" className="btn">My Projects</a>
          </div>
        </div>
        <div>
          <a href="#about" className="scroll-down">
            <FaChevronDown />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default LandingPage
