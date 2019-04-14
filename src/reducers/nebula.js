export const nebula = (state = [], action) => {
    switch (action.type) {
        case 'GET_NEBULA_DATA':
            return action.nebulaData;
        default:
            return state;
    }
}