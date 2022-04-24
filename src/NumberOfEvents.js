import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        alert: "Enter a number between 1 and 18",
      });
    } else {
      this.setState({
      numberOfEvents: value,
      });
    };
  }

  render() {
    return(
      <div className="NumberOfEvents">Number of Events:
        <div>
          <input
            className="number-of-events"
            type="number"
            value={this.state.numberOfEvents} //should this be state?
            onChange={this.handleInputChange}
          ></input>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;