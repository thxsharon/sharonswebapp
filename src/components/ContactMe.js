import React, { Component } from "react";
import "../App.css";
import linkedin from "../linkedin.png";
import email from "../email.png";
import facebook from "../facebook.png";

export default class ContactMe extends Component {
  render() {
    return (
      <div>
        <h1>Talk to Sharon</h1>
        <div className="text">
          <img
            style={{
              height: 20,
              width: 20
            }}
            src={linkedin}
            alt="LinkedIn"
          ></img>
          &nbsp;
          <a
            href="https://www.linkedin.com/in/sharon-tan-9675b3aa/"
            className="Web"
          >
            LinkedIn
          </a>
          <div></div>
          <img
            style={{
              height: 20,
              width: 20
            }}
            src={email}
            alt="Email"
          ></img>
          &nbsp;
          <a
            href={"mailto:sharontanhx@yahoo.com.sg?Subject=Hello%20there"}
            className="Web"
          >
            Email
          </a>
          <div>
            <img
              style={{
                height: 20,
                width: 20
              }}
              src={facebook}
              alt="Facebook"
            ></img>
            &nbsp;
            <a href="https://www.facebook.com/sharon.t.xuan" className="Web">
              Facebook
            </a>
          </div>
          <div>&nbsp;</div>
        </div>
      </div>
    );
  }
}
