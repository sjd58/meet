import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('change number of events when input changes', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });

  test('number of events is changed in input', () => {
    const eventsInput = { target: { value: 16 } };
    NumberOfEventsWrapper.find('.number-of-events').simulate(
      'change',
      eventsInput
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
  });
});