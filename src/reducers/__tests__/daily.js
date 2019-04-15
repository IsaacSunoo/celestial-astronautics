import { daily } from '../daily';
import * as actions from '../../actions';

describe('daily', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = daily(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for daily', () => {
        const action = actions.getDaily(['data']);
        const initialState = [];
        const expected = ['data'];

        const result = daily(initialState, action);
        expect(result).toEqual(expected);
    });
})