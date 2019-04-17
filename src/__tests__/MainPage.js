import React from 'react';
import { MainPage, mapStateToProps } from '../containers/MainPage';
import { shallow } from 'enzyme';

const mockIsLoading = false;

describe('main page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MainPage isLoading={mockIsLoading} />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
      it.skip('returns an object with isLoading', () => {
        const mockState = {
          isLoading: false,
          error: 'error'
        };
        const expectedState = {
          isLoading: false
        };
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expectedState);
      });
    });
})