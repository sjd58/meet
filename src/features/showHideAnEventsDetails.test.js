import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the app main page has loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user does not select any events', () => {

    });

    then('each event element will be collapsed', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0)
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the app main page has loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user selects an event', async () => {
      AppWrapper.update();
      let Event = AppWrapper.find('.event');
      Event.find('.displayMore').at(0).simulate('click');
    });

    then('the selected event will expand to display more details', () => {
      const EventDescription = AppWrapper.find('.event .EventDescription') //check className to make sure it matches
      expect(EventDescription).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the app has displayed extra details for a particular event', () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
      let Event = AppWrapper.find('.event');
      Event.find('.extra-details').at(0).simulate('click');
    });

    when('the user selects the display less button', () => {
      AppWrapper.update();
      let Event = AppWrapper.find('.event');
      Event.find('.details-button').at(0).simulate('click');
    });

    then('the selected event will cease to display the event description', () => {
      const extraDetails = AppWrapper.find('.event .extra-details');
      expect(extraDetails).toHaveLength(0);
    });
  });
});