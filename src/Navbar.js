import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <href className="nav-href active" aria-current="page" to="/">Home</href>
            </li>
            <li className="nav-item">
              <href className="nav-href" to="/About">About</href>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-href dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">About Us</a></li>
                <li><a className="dropdown-item" href="/">Contact Us</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Feedback</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-href disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <div className="form-check form-switch">


            </div>
          </form>
          <div className={`form-check form-switch text-${props.bmode}`}>
            <input className="form-check-input" onClick={props.toggleColor}  type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>

    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string
};
Navbar.defaultProps = {
  title: 'Set title here'
};
