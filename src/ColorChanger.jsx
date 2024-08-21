// src/ColorChanger.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ColorChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '5px'}}>
      <button onClick={toggleDarkMode} style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '10px',marginRight: '10px', borderRadius: '7%' }}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ marginRight: '8px' }} />
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ColorChanger;
