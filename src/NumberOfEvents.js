import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    return(
      <div className="NumberOfEvents">Number of Events:
        <div>
          <input
            className="number-of-events"
            type="number"
            value={this.props.numberOfEvents}
            onChange={this.handleInputChange}
          ></input>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;