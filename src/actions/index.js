export const setLoading = isLoading => ({
    type: 'SET_LOADING',
    isLoading
});

export const setError = message => ({
    type: 'SET_ERROR',
    message
});

export const getApolloData = apolloData => ({
    type: 'GET_APOLLO_DATA',
    apolloData
});

export const getDaily = daily => ({
    type: 'GET_DAILY',
    daily
});