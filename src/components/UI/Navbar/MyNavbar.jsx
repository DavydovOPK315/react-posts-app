import React from 'react';
import '../../../styles/App.css';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">About site</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/error">Error</Link>
      </div>
    </div>
  )
}

export default MyNavbar;

