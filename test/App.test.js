/* eslint-disable import/extensions */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('Clever test name 1', () => {
  const wrapper = Enzyme.shallow(<App />);  // Define our component wrapper
  expect(wrapper.find('.helloClass').text()).toBe('hello');
});