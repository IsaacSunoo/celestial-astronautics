export const daily = (state = [], action) => {
    switch (action.type) {
        case 'GET_DAILY':
            return action.daily;
        default:
            return state;
    }
}