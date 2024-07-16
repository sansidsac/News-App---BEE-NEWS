import React, { Component } from 'react'

export class NavBar extends Component {


  render() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand f1 f2" href="/"><strong>BEE NEWS</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-warning"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link f1" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link f1" href="/">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link f1" href="/">Subscribe</a>
              </li>
            </ul>
            <span className="navbar-text f1 f2">
              Subscribe for daily updates !
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar