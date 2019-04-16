import { stars } from '../stars';
import * as actions from '../../actions';

describe('stars', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = stars(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array to global state for getStars', () => {
    const action = actions.getStarsData(['star']);
    const initialState = [];
    const expected = ['star'];

    const result = stars(initialState, action);
    expect(result).toEqual(expected);
  });
});
