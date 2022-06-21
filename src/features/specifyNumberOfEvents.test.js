import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the app presents evens relevant to the user', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user does not specify the number of events to display', () => {
      AppWrapper.update();
    });

    then('the app will display 32 events by default, length of 2 for the local test', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then}) => {
    let AppWrapper;
    given('the app presents events relevant to the user', () => {
      AppWrapper = mount(<App />);
    });

    when('the user wants to only see a certain number', async () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
      NumberOfEventsWrapper.find('.number-of-events').simulate('change', { target: {value: 1} });
    });

    then('the app will display that number of events', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(1)
    });
  });
});