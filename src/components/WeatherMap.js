import React, { Component } from "react";
import "../App.css";

export default class WeatherMap extends Component {
  render() {
    return (
      <div>
        <iframe
          width="600"
          height="400"
          title="WeatherMap"
          src="https://data.gov.sg/dataset/weather-forecast/resource/571ef5fb-ed31-48b2-85c9-61677de42ca9/view/4c127d9a-cba6-445a-8fc1-978b565f9bf7"
          frameBorder="0"
        >
          {" "}
        </iframe>
      </div>
    );
  }
}
