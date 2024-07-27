import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand f1 f2" to="/">
          <strong>BEE NEWS</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-warning"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link f1" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f1" aria-current="page" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link f1"
                aria-current="page"
                to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f1" aria-current="page" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f1" aria-current="page" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f1" aria-current="page" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link f1"
                aria-current="page"
                to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <Link className="nav-link f1" to="/">
            Subscribe for daily updates!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
