import React, { useState } from 'react';
import logo from '../../../assets/img/logo-tiff.png';
import SideBar from '../SideBar';
import Navbar from '../Navbar';
import './index.css';

const Header = () => {
  const hiddenOn = 'navbar-side is-hidden';
  const hiddenOff = 'navbar-side';
  const [hidden, setHidden] = useState(hiddenOn);

  const toggleSidebar = () => {
    hidden === hiddenOn ? setHidden(hiddenOff) : setHidden(hiddenOn);
  };

  const handleClick = () => toggleSidebar();

  return (
    <section className="box p-0">
      <Navbar logo={logo} handleClick={handleClick} />
      <SideBar logo={logo} hidden={hidden} handleClick={handleClick} />
    </section>
  );
};

export default Header;
