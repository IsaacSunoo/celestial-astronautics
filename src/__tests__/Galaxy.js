import React from 'react';
import { Galaxy, mapStateToProps, mapDispatchToProps } from '../containers/Galaxy';
import { shallow } from 'enzyme';
import { getGalaxy } from '../thunks';

jest.mock('../thunks');
const mockGalaxy = [];
const mockIsLoading = false;

describe('galaxy', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Galaxy galaxy={mockGalaxy} isLoading={mockIsLoading} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it.skip('returns an object with galaxies', () => {
      const mockState = {
        galaxy: ['jupiter', 'saturn'],
        isLoading: false,
        error: 'error'
      };
      const expectedState = {
        galaxy: ['jupiter', 'saturn'],
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getGalaxy thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getGalaxy();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getGalaxy();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
