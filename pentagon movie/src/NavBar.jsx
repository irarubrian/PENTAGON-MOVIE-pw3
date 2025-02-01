import React from 'react';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li><SearchBar /></li>
      </ul>
    </nav>
  );
}

export default NavBar;
