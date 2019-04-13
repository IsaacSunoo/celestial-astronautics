export const orion = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORION_DATA':
            return action.orionData;
        default:
            return state;
    }
}