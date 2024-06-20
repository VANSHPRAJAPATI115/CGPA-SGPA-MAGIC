// src/App.jsx
// import React from 'react';
import Navber from './Navber';
import TextForm from './TextForm';
import Footer from './Footer';
import SCPAtoCGPAConverter from './SCPAtoCGPAConverter'; // Import the new component
import './App.css';

function App() {
  return (
    <>
      <Navber />
      <div className="container">
        <TextForm />
        <div className="converter-wrapper">
          <SCPAtoCGPAConverter /> {/* Add the new component here */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
