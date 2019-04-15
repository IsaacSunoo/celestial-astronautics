import { milkyway } from '../milkyway';
import * as actions from '../../actions';

describe('milkyway', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = milkyway(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for milkyway', () => {
        const action = actions.getMilkyData(['data']);
        const initialState = [];
        const expected = ['data'];

        const result = milkyway(initialState, action);
        expect(result).toEqual(expected);
    });
})