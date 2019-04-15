import { error } from '../error';
import * as actions from '../../actions';

describe('error', () => {
    it('should return initial state', () => {
        const expected = '';

        const result = error(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an error to global state for error', () => {
        const action = actions.setError(['Error']);
        const initialState = [];
        const expected = ['Error'];

        const result = error(initialState, action);
        expect(result).toEqual(expected);
    });
})