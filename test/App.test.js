import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

test(`Should contain the title 'Hello, World'`, () => {
  const wrapper = Enzyme.shallow(<App />);
  expect(wrapper.find('.hello-class').text()).toBe('hello');
});