import React from 'react';

const Navbar = ({ handleClick, logo }) => {
  return (
    <nav className="navbar py-5">
      <div className="container is-fluid">
        <div className="is-flex is-justify-content-between is-align-items-center full-width">
          <button
            onClick={handleClick}
            className="navbar-menu-open button is-ghost"
          >
            <span className="icon is-medium">
              <i className="fas fa-lg fa-bars" />
            </span>
          </button>
          <a className="mx-auto" href="#hello">
            <figure className="image is-48x48">
              <img src={logo} alt="Tiff" />
            </figure>
          </a>
          <div>
            <button className="button is-ghost">
              <span className="icon is-medium">
                <i className="fas fa-lg fa-search" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
