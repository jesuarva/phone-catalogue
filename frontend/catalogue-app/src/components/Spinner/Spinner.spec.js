import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('Spinner component', () => {
  const spinnerComponent = <Spinner />;

  it('should renders correctly', () => {
    const tree = renderer.create(spinnerComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
