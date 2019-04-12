export const apollo20 = (state = [], action) => {
    switch (action.type) {
        case 'GET_APOLLO_DATA':
            return action.apolloData;
        default:
            return state;
    }
}