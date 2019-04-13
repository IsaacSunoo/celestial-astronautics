import { combineReducers } from 'redux';
import { loading } from './loading';
import { apollo20 } from './apollo20';
import { error } from './error';
import { daily } from './daily';
import { orion } from './orion';

export const rootReducer = combineReducers({
    isLoading: loading,
    error,
    apollo20,
    orion,
    dailyNews: daily
})