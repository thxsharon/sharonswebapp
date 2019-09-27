import React, { Component } from "react";
import "../App.css";
import photo1 from "../hiking.jpg";
import photo2 from "../work.jpg";
import photo3 from "../intro2.jpg";

export default class AboutMe extends Component {
  state = {
    images: [photo1, photo2, photo3],
    index: 0
  };

  moveNext = () => {
    this.setState({
      index: this.state.index + 1
    });
  };

  moveBack = () => {
    this.setState({
      index: this.state.index - 1
    });
  };
  render() {
    return (
      <div>
        <table className="Table2">
          <tr className="tr2">
            <td className="td2">
              <img
                className="aboutme"
                src={this.state.images[this.state.index]}
                alt="That's All!"
              />
              <div>
                <button onClick={this.moveBack}>Previous Photo</button>
                <button onClick={this.moveNext}>Next Photo</button>
              </div>
            </td>
            <td className="td2">
              <h1>Hello! I am Sharon</h1>
              <div className="text">
                I am a lady (yay!), and technically still a youth based on
                National Youth Council's definition. By profession, I'm a
                dentist trained in public health.
              </div>
              <h3>Why do I want to join techladies bootcamp #5?</h3>
              <div className="text">
                I've always wanted to create a web/ mobile application to spread
                dental public health knowledge to the public. In particular, I'd
                like to reach out to the (current and future) elderly and their
                caregivers to help to monitor and improve the elderly's oral
                health, through interactive apps and even telehealth. Public
                health resources are often limited, and having a good repertoire
                and depth of skills in web app development will go a long way in
                achieving this vision. Plus, the work we will deliver to UN
                Women and REACH Community Services through the bootcamp will
                contribute back to the community in meaningful ways.
              </div>
            </td>
          </tr>
        </table>
        <div>&nbsp;</div>
      </div>
    );
  }
}
