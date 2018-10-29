import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import phones from '../../../../../backend/api/phones.json';
import Card from '../Card/Card';
import TestWrapper from '../TestWrapper/TestWrapper';
import { PhoneListContainer } from './PhoneListContainer.js';

configure({ adapter: new Adapter() });

describe('PhoneListContainer component', () => {
  function setUp() {
    const props = {
      data: phones,
    };

    const component = (
      <Router>
        <PhoneListContainer {...props} />
      </Router>
    );

    return {
      props,
      component,
    };
  }

  it('should renders correctly', () => {
    const { component } = setUp();
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders all Card coponents', () => {
    const { component } = setUp();
    const mounted = mount(<TestWrapper>{() => component}</TestWrapper>);
    const cards = mounted.find(Card);
    expect(cards).toHaveLength(17);
  });
});
