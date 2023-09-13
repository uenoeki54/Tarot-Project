import React from 'react';
import banner from '../assets/banner.avif';

function Header() {
  return (
    <header>
      <img
        className="banner"
        src={banner}
        width="100%"
        alt="banner tarot project"
      ></img>
    </header>
  );
}

export default Header;
