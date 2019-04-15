import { orion } from '../orion';
import * as actions from '../../actions';

describe('orion', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = orion(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for orion', () => {
        const action = actions.getOrionData(['data']);
        const initialState = [];
        const expected = ['data'];

        const result = orion(initialState, action);
        expect(result).toEqual(expected);
    });
})