import React from 'react';
import { shallow } from 'enzyme';
import ParticlesContainer from '../components/Particles';

describe('Particles container', () => {
    let wrapper;
    window.fetch = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<ParticlesContainer />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});