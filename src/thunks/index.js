import { setLoading, getApolloData, setError, getDaily } from '../actions';
import { fetchCall } from '../api';
import apiKey from '../api_key/apiKey';

// const baseUrl = 'https://api.nasa.gov/';

export const getApollo20 = () => {
    const url = 'https://images-api.nasa.gov/search?q=apollo%20landing&media_type=image';
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const apollo = await fetchCall(url);
            dispatch(setLoading(false));
            dispatch(getApolloData(apollo));
        } catch (err) {
            dispatch(setError(err.message));
        }
    }
}

export const getDailyNews = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const dailyNews = await fetchCall(url);
            dispatch(setLoading(false));
            dispatch(getDaily(dailyNews));
        } catch (err) {
            dispatch(setError(err.message));
        }
    }
}

