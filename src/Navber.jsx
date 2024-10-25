// import React from 'react'
import './App.css'
import ColorChanger from './ColorChanger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navber() {
  return (
    <>
   

      <nav className="navbar navbar-expand-lg navbar-lg-dark bg-dark px-5">
      <a className="navbar-brand" href="#">
      <img src="src\assets\logo.png" alt="Vp" style={{ height: '30px', width: 'auto' }} />
    </a>       
     <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-contact">
          <a className="contact-link" href="vanshprajapati115@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/vp115" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="contact-link" href="https://github.com/VANSHPRAJAPATI115" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="color-changer-container">
          <ColorChanger />
        </div>
      </nav>
    </>
  )
}
