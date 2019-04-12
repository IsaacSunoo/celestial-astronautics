import { combineReducers } from 'redux';
import { loading } from './loading';
import { apollo20 } from './apollo20';
import { error } from './error';

export const rootReducer = combineReducers({
    loading,
    error,
    apollo20
})