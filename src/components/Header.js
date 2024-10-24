import React from 'react';
import './Style/Header.css';  

const Header = () => {
  return (
    <header className="header-container">
      <img src="https://static.vecteezy.com/system/resources/previews/000/566/844/original/cute-pig-icon-vector.jpg" alt="Logo" className="logo" />

      <nav className="nav-menu">
        <a href="/">Home</a>

        <div className="dropdown-container">
          <button className="dropdown-button">About the Ministry</button>
          <div className="dropdown-content">
            <a href="/mission">Mission</a>
            <a href="/vision">Vision</a>
          </div>
        </div>

        <a href="/agric-lands">Agric Lands</a>

        <div className="dropdown-container">
          <button className="dropdown-button">Activities</button>
          <div className="dropdown-content">
            <a href="/projects">Projects</a>
            <a href="/events">Events</a>
          </div>
        </div>

        <a href="/agric-kids" className="agric-kids-link">Agric Kids</a>
      </nav>

      <button className="enquiry-button">ENQUIRIES</button>
    </header>
  );
};

export default Header;
