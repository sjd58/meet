import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        alert: "Enter a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
    };
    this.props.updateNumberOfEvents(event.target.value);
  }

  render() {
    return(
      <div className="NumberOfEvents">Number of Events:
        <div>
          <input
            className="number-of-events"
            type="number"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          ></input>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;