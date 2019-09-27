import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log("Hello");
    return (
      <div>
        <button onClick={this.increment}>Add to the Count</button> &nbsp; Count:{" "}
        {this.state.count} &nbsp;
        <button onClick={this.decrement}>Reduce the Count</button>
      </div>
    );
  }
}
