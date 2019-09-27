import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <ul className="nav">
        <Link to="/">
          <li>
            <a href="#home">
              <span role="img" aria-label="Home" on>
                🏡
              </span>
              Home
            </a>
          </li>
        </Link>
        <Link to="/aboutme">
          <li>
            <a href="aboutme.html">
              <span role="img" aria-label="AboutMe">
                🙋
              </span>
              ‍About Me
            </a>
          </li>
        </Link>
        <Link to="/contactme">
          <li>
            <a href="contactme.html">
              <span role="img" aria-label="ContactMe">
                🐱
              </span>
              Contact Me
            </a>
          </li>
        </Link>
        <Link to="/weatherforecast">
          <li>
            <a href="weatherforecast.html">
              <span role="img" aria-label="Weather">
                🌦️
              </span>
              Weather Forecast
            </a>
          </li>
        </Link>
      </ul>
    );
  }
}
