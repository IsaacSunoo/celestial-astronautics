import React from 'react';
import { Apollo20, mapStateToProps, mapDispatchToProps } from '../containers/Apollo20';
import { shallow } from 'enzyme';
import { getApollo20 } from '../thunks';

jest.mock('../thunks');
const mockApollo = [];
const mockIsLoading = false;

describe('apollo', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Apollo20 apollo20={mockApollo} isLoading={mockIsLoading} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns an object with houses', () => {
      const mockState = {
        apollo20: ['lunar', 'eclipse'],
        isLoading: false,
        error: 'error'
      };
      const expectedState = {
        apollo20: ['lunar', 'eclipse'],
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getApollo thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getApollo20();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getApollo20();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
