import React, { useState } from 'react';
import logo from '../../../assets/img/logo-tiff.png';
import sidebarIcon from '../../../assets/icons/sidebar.png';
import SideBar from '../SideBar/index.jsx';
import './index.css';

const Header = () => {
  const hiddenOn = 'navbar-side is-hidden';
  const hiddenOff = 'navbar-side';
  const [hidden, setHidden] = useState(hiddenOn);

  const toggleSidebar = () =>
    hidden === hiddenOn ? setHidden(hiddenOff) : setHidden(hiddenOn);
  const handleClick = () => toggleSidebar();

  return (
    <section>
      <nav className="navbar py-5">
        <div className="container is-fluid">
          <div className="is-flex is-justify-content-between is-align-items-center full-width">
            <button
              onClick={handleClick}
              className="navbar-menu-open button is-ghost"
            >
              <img width="30" height="30" src={sidebarIcon} alt="" />
            </button>
            <a className="mx-auto" href="#hello">
              <figure className="image is-48x48">
                <img src={logo} alt="Tiff" />
              </figure>
            </a>
            <div>
              <button className="button is-ghost has-text-light">
                <svg
                  className="is-inline-block"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SideBar logo={logo} hidden={hidden} handleClick={handleClick} />
    </section>
  );
};

export default Header;
