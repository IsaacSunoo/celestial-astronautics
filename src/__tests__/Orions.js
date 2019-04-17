import React from 'react';
import { Orion, mapStateToProps, mapDispatchToProps } from '../containers/Orion';
import { shallow } from 'enzyme';
import { getOrion } from '../thunks';

jest.mock('../thunks');
const mockOrion = [];
const mockIsLoading = false;

describe('milkyway', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Orion orion={mockOrion} isLoading={mockIsLoading} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns an object with houses', () => {
      const mockState = {
        orion: ['constellation', 'black hole'],
        isLoading: false,
        error: 'error'
      };
      const expectedState = {
        orion: ['constellation', 'black hole'],
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getMilkyway thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getOrion();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getOrion();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
