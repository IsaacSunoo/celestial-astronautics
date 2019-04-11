import { setLoading } from '../actions';
import { fetchCall } from '../api';
import apiKey from '../api_key/apiKey';

const baseUrl = 'https://api.nasa.gov/';

export const getApollo20 = () => {
    const url = 'https://images-api.nasa.gov/search?q=apollo%20landing&media_type=image';
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const apollo20 = await fetchCall(url);
            dispatch(setLoading(false));

        } catch (err) {
            dispatch(setError());
        }
    }
}
