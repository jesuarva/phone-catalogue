import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import MAXMOVIL_LOGO from '../../media/Masmovillogo.svg.png';
import Pic from './Pic';

configure({ adapter: new Adapter() });

describe('Pic component', () => {
  const picComponent = <Pic img={MAXMOVIL_LOGO} altAttribute="Maxmovil logo" />;

  it('should renders correctly', () => {
    const tree = renderer.create(picComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
