import React from 'react';
import { Stars, mapStateToProps, mapDispatchToProps } from '../containers/Stars';
import { shallow } from 'enzyme';
import { getStars } from '../thunks';

jest.mock('../thunks');
const mockStars = [];
const mockIsLoading = false;

describe('stars', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Stars stars={mockStars} isLoading={mockIsLoading} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns an object with houses', () => {
      const mockState = {
        stars: ['neptunes', 'endorphins'],
        isLoading: false,
        error: 'error'
      };
      const expectedState = {
        stars: ['neptunes', 'endorphins'],
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getMilkyway thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getStars();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getStars();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
