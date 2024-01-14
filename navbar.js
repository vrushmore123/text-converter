import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         <strong>{props.title}</strong>
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
          <span className="navbar-hrefggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="nav-a active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a active" aria-current="page" to="/about">
                About{props.aboutText}
              </Link>
            </li>
          </ul>


{/* dark mode buttons */}
          {/* green dark mode */}
          {/* <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              onClick={props.greenMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
               className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Green dark mode
            </label>
          </div> */}

          {/* red dark mode */}
          {/* <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              onClick={props.redMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Red dark mode
            </label>
          </div> */}
          {/* black dark mode */}
          {/* <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              onClick={props.blackMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
               className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Black dark mode
            </label>
          </div> */}

          <div class="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
