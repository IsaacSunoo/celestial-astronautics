import React from 'react';
import { Nebula, mapStateToProps, mapDispatchToProps } from '../containers/Nebula';
import { getNebula } from '../thunks';
import { shallow } from 'enzyme';

jest.mock('../thunks');
const mockNebula = [];
const mockIsLoading = false;

describe('nebula', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Nebula nebula={mockNebula} isLoading={mockIsLoading} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns an object with houses', () => {
      const mockState = {
        nebula: ['nebula', 'galactic'],
        isLoading: false,
        error: 'error'
      };
      const expectedState = {
        nebula: ['nebula', 'galactic'],
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getNebula thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getNebula();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getNebula();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
