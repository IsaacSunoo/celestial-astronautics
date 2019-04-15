export const milkyway = (state = [], action) => {
    switch (action.type) {
        case 'GET_MILKY_DATA':
            return action.milkyData;
        default:
            return state;
    }
}