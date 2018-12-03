export function persons (state = [], action) {
    switch (action.type) {
        case "PERSONS_FETCH_DATA_SUCCESS":
            return action.persons;
        default:
            return state;
    }
}

export function personsHasErrored(state = false, action){
    switch (action.type) {
        case "PERSONS_HAS_ERRORED":
            return action.hasErrored;
        default:
            return state;
    }
}

export function personsIsLoading(state = false, action) {
    switch (action.type) {
        case "PERSONS_IS_LOADING":
            return action.isLoading;
        default:
            return state;
    }
}


export function personsUpdated(state = false, action) {
    switch (action.type) {
        case "PERSONS_WAS_UPDATED":
            return action.wasUpdated;
        default:
            return state;
    }
}