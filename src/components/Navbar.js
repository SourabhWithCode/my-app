import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {




  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand fw-bold text-${props.text}`} to="/my-app">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse bg-${props.mode}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-a active text-${props.text}`} aria-current="page" to="/my-app">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-a disable text-${props.text}`} to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <form className="d-flex ">
              <div id="thisWarning" style={{ height: "30px", width: "30px" }} onClick={props.toggleWarning} className={`bg-${props.Wtext} rounded-circle text-${props.Wtext} c-pointer mx-3 `}>

              </div>
              <div id="thisWarning" style={{ height: "30px", width: "30px" }} onClick={props.toggleMode} className={`bg-${props.text} rounded-circle text-${props.Wtext} c-pointer mx-3 `}>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set The Title",
  aboutText: "Set The About Text",
};
