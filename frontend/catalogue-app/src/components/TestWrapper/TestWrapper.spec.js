import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import TestWrapper from './TestWrapper';

configure({ adapter: new Adapter() });

it('should renders correctly', () => {
  const tree = renderer.create(<TestWrapper>{() => <div />}</TestWrapper>);
  expect(tree).toMatchSnapshot();
});
