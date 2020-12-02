import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
     
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <h4 style="color=white;"> BEE CREATIVE STUDIOS</h4><br></br>
        <Link to="/" className="navbar-brand">
          HOME
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/posts" className="nav-link">
               POSTERS
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/smovies" className="nav-link">
                SHORT MOVIES
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/srls" className="nav-link">
                SERIALS
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/mvs" className="nav-link">
                MOVIES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
