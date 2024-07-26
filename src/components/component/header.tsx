import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'

const Header = () => (
  <header>
    <div className="container">
      <div className="burger-menu-icon">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="#landing-page">
            <a>
              <img src="/images/profile-pic.jpg" alt="Shivani N" className="profile-pic nav-link" />
              <span className="caption nav-link">Shivani N</span>
            </a>
          </Link>
        </li>
        <li className="nav-item"><Link href="#about"><a className="nav-link">About</a></Link></li>
        <li className="nav-item"><Link href="#projects"><a className="nav-link">Projects</a></Link></li>
        <li className="nav-item"><Link href="#contact"><a className="nav-link">Contact</a></Link></li>
        <li className="nav-item">
          <Link href="https://www.linkedin.com/in/shivani-n-331764227" target="_blank">
            <a className="nav-link"><FaLinkedin /></a>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
