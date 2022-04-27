import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: ''
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    if ((value < 1 || value > 32)) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32',
      });
    } else {
      return this.setState({
        numberOfEvents: value,
        errorText: ''
      });
    }
    this.props.updateEvents(null, value);
  };

  render() {
    return(
      <div className="NumberOfEvents">Number of Events:
        <div>
          <input
            className="number-of-events"
            type="number"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChange}
          ></input>
        </div>
        <div className="numberOfEventsAlert">
          <ErrorAlert text={this.state.errorText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;