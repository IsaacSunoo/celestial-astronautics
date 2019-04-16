export const stars = (state = [], action) => {
    switch (action.type) {
        case 'GET_STARS_DATA':
            return action.starsData;
        default:
            return state;
    }
}