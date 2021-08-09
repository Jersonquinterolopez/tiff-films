import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ hidden, handleClick }) => {
  return (
    <Fragment>
      <div className={hidden}>
        <div className="navbar-backdrop is-fixed is-inset-0 has-background-dark three-quarter-opacity-and-index"></div>
        <aside className="menu is-fixed is-top-0 is-left-0 is-bottom-0 is-flex is-flex-direction-column has-mw-md py-6 px-6 has-background-white three-quarter-width-and-index">
          <div className="is-flex is-align-items-center mb-10">
            <button
              onClick={handleClick}
              className="navbar-close button is-text p-0 mb-2"
              type="button"
              aria-label="Close"
            >
              Sidebar
            </button>
          </div>
          <ul className="menu-list is-size-7">
            <li className="mb-2">
              <Link to="/movies">highlights</Link>
            </li>
            <li className="mb-2">
              <a href="#company">Company</a>
            </li>
          </ul>
          <div className="mt-auto">
            <div className="py-6">
              <a
                className="button is-outlined is-fullwidth mb-2"
                href="#example"
              >
                Log in
              </a>
              <a className="button is-fullwidth" href="#exampe">
                Sign Up
              </a>
            </div>
            <p className="mb-4 has-text-centered has-text-grey">
              <span>© Tiff 2021 All rights reserved.</span>
            </p>
          </div>
        </aside>
      </div>
    </Fragment>
  );
};

export default SideBar;
