import React from 'react';
import Logo from '../../../assets/img/logo-tiff.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={Logo} alt="Tiff-film" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Log out</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
