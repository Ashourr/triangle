import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import imgNav from "../../imges/logo2@4x.png";
import { faArrowRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  let [opne, setopne] = useState(false);
  return (
    <div className={`nav-bar sticky-top`}>
      <div className="container-fluid p-0 ">
        <nav className="navbar navbar-expand-lg ">
          <Link to={"/"} className="navbar-brand" href="index.html">
            <img src={imgNav} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mian"
            aria-controls="mian"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => opne?setopne(false):setopne(true)}
          >
            {opne ? (
              
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              // <FontAwesomeIcon icon={faBars} />
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div className="collapse navbar-collapse " id="mian">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 px-10">
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/"}
                  className={`nav-link`}
                  aria-current="page"
                  href="#home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/services"}
                  className={`nav-link`}
                  href="#about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  activeclassname="active"
                  to={"/appointments"}
                  className={`nav-link`}
                  href="#products"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/profile"}
                  className={`nav-link`}
                  href="#Contact"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/about"}
                  className={`nav-link`}
                  href="#Contact"
                >
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/about"}
                  className={`nav-link`}
                  href="#Contact"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/about"}
                  className={`nav-link`}
                  href="#Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="register">
              <Link>
                <span className="span1">Template</span>
                <span className="span2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
