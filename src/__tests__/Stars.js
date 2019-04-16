import { mapStateToProps, mapDispatchToProps } from '../containers/Stars';
import { getStars } from '../thunks';

jest.mock('../thunks');

describe('stars', () => {
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
    it.skip('calls dispatch with a getMilkyway thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getStars();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getStars();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
