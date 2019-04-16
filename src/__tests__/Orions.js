import { mapStateToProps, mapDispatchToProps } from '../containers/Orion';
import { getOrion } from '../thunks';

jest.mock('../thunks');

describe('milkyway', () => {
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
    it.skip('calls dispatch with a getMilkyway thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getOrion();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getOrion();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
