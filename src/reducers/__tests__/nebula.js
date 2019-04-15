import { nebula } from '../nebula';
import * as actions from '../../actions';

describe('nebula', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = nebula(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for nebula', () => {
        const action = actions.getNebulaData(['data']);
        const initialState = [];
        const expected = ['data'];

        const result = nebula(initialState, action);
        expect(result).toEqual(expected);
    });
});