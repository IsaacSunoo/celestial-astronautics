import { combineReducers } from 'redux';
import { loading } from './loading';
import { apollo20 } from './apollo20';
import { error } from './error';
import { daily } from './daily';

export const rootReducer = combineReducers({
    isLoading: loading,
    error,
    apollo20,
    dailyNews: daily
})