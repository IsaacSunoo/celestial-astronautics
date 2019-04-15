export const galaxy = (state = [], action) => {
    switch (action.type) {
        case 'GET_GALAXY_DATA':
            return action.galaxyData;
        default:
            return state;
    }
}