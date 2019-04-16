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

export const getOrionData = orionData => ({
    type: 'GET_ORION_DATA',
    orionData
});

export const getMilkyData = milkyData => ({
    type: 'GET_MILKY_DATA',
    milkyData
});

export const getNebulaData = nebulaData => ({
    type: 'GET_NEBULA_DATA',
    nebulaData
});

export const getGalaxyData = galaxyData => ({
    type: 'GET_GALAXY_DATA',
    galaxyData
});

export const getStarsData = starsData => ({
    type: 'GET_STARS_DATA',
    starsData
});