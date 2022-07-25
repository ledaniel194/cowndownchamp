import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  adding0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 1000 / 60) % 60;
    const hours = Math.floor(time / 1000 / 60 / 60) % 60;
    const days = Math.floor(time / 1000 / 60 / 60 / 24) % 60;
    this.setState({ days, minutes, hours, seconds });
  }

  render() {
    return (
      <div className="App-content">
        <div className="App-number">
          {this.adding0(this.state.days)}
          <span className="App-text">Days</span>
        </div>
        <div className="App-number">
          {this.state.hours}
          <span className="App-text">Hours</span>
        </div>
        <div className="App-number">
          {this.state.minutes}
          <span className="App-text">Minutes</span>
        </div>
        <div className="App-number">
          {this.state.seconds}
          <span className="App-text">Seconds</span>
        </div>
      </div>
    );
  }
}
export default Clock;
