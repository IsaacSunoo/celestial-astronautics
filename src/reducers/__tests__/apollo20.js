import { apollo20 } from '../apollo20';
import * as actions from '../../actions';

describe('apollo', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = apollo20(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for getApollo', () => {
        const action = actions.getApolloData(['data']);
        const initialState = [];
        const expected = ['data'];

        const result = apollo20(initialState, action);
        expect(result).toEqual(expected);
    });
})