import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../components/PageNotFound';

describe('Page Not Found', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PageNotFound />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});