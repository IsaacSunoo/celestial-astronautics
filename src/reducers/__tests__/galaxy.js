import { galaxy } from '../galaxy';
import * as actions from '../../actions';

describe('galaxy', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = galaxy(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for galaxy', () => {
        const action = actions.getGalaxyData(['data']);
        const initialState = [];
        const expected = ['data'];

        const result = galaxy(initialState, action);
        expect(result).toEqual(expected);
    });
})