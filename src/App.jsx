import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Clock from "./Clock";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "August 1, 2022",
      newDeadline: "",
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="App-title">
            Coundown <span style={{ color: "darkgray" }}>until</span>{" "}
            {this.state.deadline}
          </div>

          <Clock deadline={this.state.deadline} />

          <div className="Button">
            <input
              placeholder="Enter time"
              onChange={(event) =>
                this.setState({ newDeadline: event.target.value })
              }
            ></input>
            <button onClick={() => this.changeDeadline()}>Start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
