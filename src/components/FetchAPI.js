import React, { Component } from "react";
import "../App.css";
import WeatherMap from "./WeatherMap";

export default class FetchAPI extends Component {
  state = {
    loading: true,
    predictions: [],
    time: null
  };

  async componentDidMount() {
    const url =
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      predictions: data.items[0].forecasts,
      time: data.items[0].timestamp,
      loading: false
    });
    console.log(data.items);
  }

  render() {
    if (this.state.loading) {
      return <div> loading...</div>;
    }

    if (!this.state.predictions) {
      return <div>no prediction available...</div>;
    }

    return (
      <div className="Home">
        <p>
          <WeatherMap />
        </p>
        <table className="Table">
          <tr className="tr">
            <th className="th">S/N</th>
            <th className="th">Area</th>
            <th className="th">Weather Forecast</th>
          </tr>
        </table>
        {this.state.predictions.map((prediction, i) => (
          <table className="Table" key={prediction.area + prediction.forecast}>
            <tr className="tr">
              <td className="td">{i + 1}</td>
              <td className="td">{prediction.area}</td>
              <td className="td">{prediction.forecast}</td>
            </tr>
          </table>
        ))}
        <div>Time of Forecast: {this.state.time}</div>
        <div>
          Data Source:{" "}
          <a
            href="https://data.gov.sg/dataset/weather-forecast?resource_id=571ef5fb-ed31-48b2-85c9-61677de42ca9"
            className="Web"
          >
            Data.gov.sg
          </a>
        </div>
      </div>
    );
  }
}
