import { mapStateToProps, mapDispatchToProps } from '../containers/Galaxy';
import { getGalaxy } from '../thunks';

jest.mock('../thunks');

describe('galaxy', () => {
  describe('mapStateToProps', () => {
    it('returns an object with houses', () => {
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
    it.skip('calls dispatch with a getGalaxy thunk', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getGalaxy();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getGalaxy();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
