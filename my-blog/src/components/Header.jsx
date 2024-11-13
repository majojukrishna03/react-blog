// src/components/Header.jsx
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle dark mode on the body
  };

  return (
    <header className={`blog-header ${isDarkMode ? 'dark' : ''}`}>
      <h1>My Awesome Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
