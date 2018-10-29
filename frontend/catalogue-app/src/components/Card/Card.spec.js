import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Jumbotron } from 'reactstrap';
import Pic from '../Pic/Pic';
import TestWrapper from '../TestWrapper/TestWrapper';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card component', () => {
  function setUp() {
    const props = {
      phone: {
        image:
          'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/select/iphone8-select-2017?wid=212&hei=292&fmt=png-alpha&.v=1503618523038',
        Model: 'Apple iPhone 8 Plus',
      },
    };

    const testingComponent = (
      /**
       * <Router/> is neccesary in order to avoid the following error
       * "Invariant Violation: You should not use <Link> outside a <Router>"
       *
       */
      <Router>
        <Card {...props} />
      </Router>
    );

    return {
      props,
      testingComponent,
    };
  }

  it('should renders correctly', () => {
    const { testingComponent } = setUp();
    const tree = renderer.create(testingComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Renders children component', () => {
    const { testingComponent } = setUp();

    const mounted = mount(<TestWrapper>{() => testingComponent}</TestWrapper>);

    it('should renders a Link component', () => {
      const link = mounted.find(Link);
      expect(link).toHaveLength(1);
    });

    it('should renders a Jumbotron component', () => {
      const jumbo = mounted.find(Jumbotron);
      expect(jumbo).toHaveLength(1);
    });

    it('should renders a Pic component', () => {
      const pic = mounted.find(Pic);
      expect(pic).toHaveLength(1);
    });
  });
});
