import { setLoading, getApolloData, setError, getDaily, getOrionData, getMilkyData, getNebulaData, getGalaxyData } from '../actions';
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

export const getOrion = () => {
    const url = 'https://images-api.nasa.gov/search?q=orion%20space&media_type=image';
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const orion = await fetchCall(url);
            dispatch(setLoading(false));
            dispatch(getOrionData(orion.collection));
        } catch (err) {
            dispatch(setError(err.message));
        }
    }
}

export const getMilkyway = () => {
    const url = 'https://images-api.nasa.gov/search?q=milkyway';
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const milkyway = await fetchCall(url);
            dispatch(setLoading(false));
            dispatch(getMilkyData(milkyway.collection));
        } catch (err) {
            dispatch(setError(err.message));
        }
    }
}

export const getNebula = () => {
    const url = 'https://images-api.nasa.gov/search?q=nebula';
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const nebula = await fetchCall(url);
            dispatch(setLoading(false));
            dispatch(getNebulaData(nebula.collection));
        } catch (err) {
            dispatch(setError(err.message));
        }
    }
}

export const getGalaxy = () => {
    const url = 'https://images-api.nasa.gov/search?q=galaxy';
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const galaxy = await fetchCall(url);
            dispatch(setLoading(false));
            dispatch(getGalaxyData(galaxy.collection));
        } catch (err) {
            dispatch(err.message);
        }
    }
}

