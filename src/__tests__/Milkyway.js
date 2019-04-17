import React from 'react';
import { Milkyway, mapStateToProps, mapDispatchToProps } from '../containers/Milkyway';
import { shallow } from 'enzyme';
import { getMilkyway } from '../thunks';

jest.mock('../thunks');
const mockMilkyway = [];
const mockIsLoading = false;

describe('milkyway', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Milkyway milkyway={mockMilkyway} isLoading={mockIsLoading} />);
  });

  it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns an object with houses', () => {
      const mockState = {
        milkyway: ['constellation', 'black hole'],
        isLoading: false,
        error: 'error'
      };
      const expectedState = {
        milkyway: ['constellation', 'black hole'],
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getMilkyway thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getMilkyway();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getMilkyway();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
