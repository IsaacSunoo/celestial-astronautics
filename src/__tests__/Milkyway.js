import { mapStateToProps, mapDispatchToProps } from '../containers/Milkyway';
import { getMilkyway } from '../thunks';

jest.mock('../thunks');

describe('milkyway', () => {
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
    it.skip('calls dispatch with a getMilkyway thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getMilkyway();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getMilkyway();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
