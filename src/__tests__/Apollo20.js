import { mapStateToProps, mapDispatchToProps } from '../containers/Apollo20';
import { getApollo20 } from '../thunks';

jest.mock('../thunks');

describe('apollo', () => {
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
    it.skip('calls dispatch with a getApollo thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getApollo20();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getApollo20();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
