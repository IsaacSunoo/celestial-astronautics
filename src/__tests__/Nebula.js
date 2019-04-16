import { mapStateToProps, mapDispatchToProps } from '../containers/Nebula';
import { getNebula } from '../thunks';

jest.mock('../thunks');

describe('nebula', () => {
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
    it.skip('calls dispatch with a getNebula thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getNebula();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getNebula();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
