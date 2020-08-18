/* eslint-disable import/extensions */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('Clever test name eleven', () => {
  const wrapper = Enzyme.shallow(<App />);  // Define our component wrapper
  expect(wrapper.find('.related-products').toBe(true));
});

describe('Clever name for test group', () => {
  let wrapper;  // Define our component wrapper

  beforeEach(() => {
    wrapper = Enzyme.shallow(<App />);
  });

  test('Clever test name 1', () => {
    expect(wrapper.find('something').text()).toBe('Some value');
  });

  test('Clever test name 2', () => {
    expect(wrapper.find('something-else').text()).toBe('Another value');
  });

  test('Clever test name 3', () => {
    expect(wrapper.find('yet-another-thing').text()).toBe('Some final value');
  });
});