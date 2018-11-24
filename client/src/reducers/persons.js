export function persons (state = [], action) {
    switch (action.type) {
        case "PERSONS_FETCH_DATA_SUCCESS":
            return action.persons;
        default:
            return state;
    }
}