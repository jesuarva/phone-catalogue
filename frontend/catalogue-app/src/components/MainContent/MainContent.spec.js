import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../../reducers/index';
import TestWrapper from '../TestWrapper/TestWrapper';
import MainContent from './MainContent';

configure({ adapter: new Adapter() });

describe('MainContent component', () => {
  const store = createStore(mainReducer, applyMiddleware(thunk));
  const component = (
    <Provider store={store}>
      <Router>
        <MainContent />
      </Router>
    </Provider>
  );

  it('should renders correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Renders children components', () => {
    const mounted = mount(<TestWrapper>{() => component}</TestWrapper>);

    it('should renders a Switch component', () => {
      const switchComponent = mounted.find(Switch);
      expect(switchComponent).toHaveLength(1);
    });

    it('should renders a Route components', () => {
      const routes = mounted.find(Route);
      expect(routes).toHaveLength(1);
    });
  });
});
