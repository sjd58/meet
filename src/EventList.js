import React, { Component } from 'react';
import { OfflineAlert } from './Alert';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {!navigator.onLine ? (
          <OfflineAlert text="Heads up, you are offline! You're looking at cached data." />
        ) : (
          ""
        )}
        <ul className="EventList">
          {events.map(event =>
            <li key={event.id}>
              <Event event={event} />
            </li>  
          )}
        </ul>
      </div>
    );
  }
}

export default EventList;