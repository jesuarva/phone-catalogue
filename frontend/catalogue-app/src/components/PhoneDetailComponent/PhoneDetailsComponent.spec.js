import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Container, Jumbotron, Table } from 'reactstrap';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../../reducers/index';
import TestWrapper from '../TestWrapper/TestWrapper';
import { PhoneDetailsComponent } from './PhoneDetailsComponent';

configure({ adapter: new Adapter() });

describe('PhoneDetailsComponent component', () => {
  function setUp() {
    const props = {
      data: [
        {
          image:
            'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/select/iphone8-select-2017?wid=212&hei=292&fmt=png-alpha&.v=1503618523038',
          Model: 'Apple iPhone 8 Plus',
        },
      ],
      match: {
        params: {
          model: 'Apple-iPhone-8-Plus',
        },
      },
    };

    const store = createStore(mainReducer, applyMiddleware(thunk));
    const component = (
      <Provider store={store}>
        <Router>
          <PhoneDetailsComponent {...props} />
        </Router>
      </Provider>
    );

    return {
      props,
      component,
    };
  }

  it('should renders correctly', () => {
    const { component } = setUp();
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });

  describe('Renders children component', () => {
    const { component } = setUp();
    const mounted = mount(<TestWrapper>{() => component}</TestWrapper>);

    it('should renders a Link component', () => {
      const link = mounted.find(Link);
      expect(link).toHaveLength(1);
    });

    it('should renders a Jumbotron component', () => {
      const jumbo = mounted.find(Jumbotron);
      expect(jumbo).toHaveLength(1);
    });

    it('should renders a Container component', () => {
      const container = mounted.find(Container);
      expect(container).toHaveLength(1);
    });

    it('should renders a Table component', () => {
      const table = mounted.find(Table);
      expect(table).toHaveLength(1);
    });
  });
});
