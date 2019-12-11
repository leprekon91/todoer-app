import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink.jsx';

function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        To-Doer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          {Meteor.userId() && (
            // eslint-disable-next-line react/jsx-fragments
            <React.Fragment>
              <CustomLink to="/todos" label="Todos" />
              <CustomLink to="/projects" label="Projects" />
            </React.Fragment>
          )}
        </ul>
        <ul className="navbar-nav">
          {Meteor.userId() ? (
            <CustomLink to="/profile" label="Profile" />
          ) : (
            <CustomLink to="/login" label="Login" />
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
