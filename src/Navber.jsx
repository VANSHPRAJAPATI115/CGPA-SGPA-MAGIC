// import React from 'react'
import './App.css'
import ColorChanger from './ColorChanger'

export default function Navber() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-lg-dark bg-dark">
  <a className="navbar-brand" href="#"><i><b>CGPA CONVERTER</b></i></a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>

      {/* <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
       */}
    </ul>
  </div>
  <div className="App">
      <ColorChanger />
    </div>
</nav>
    </>
  )
}
