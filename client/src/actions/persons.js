export function personsHasErrored(bool) {
    return {
        type: "PERSONS_HAS_ERRORED",
        hasErrored: bool
    }
}

export function personsIsLoading(bool) {
    return {
        type: "PERSONS_IS_LOADING",
        isLoading: bool
    }
}

export function personsFetchDataSuccess(persons) {
    return {
        type: "PERSONS_FETCH_DATA_SUCCESS",
        persons
    }
}

export function personsFetchData(url) {
    return (dispatch) => {
        dispatch(personsIsLoading(true));

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(personsIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(persons => dispatch(personsFetchDataSuccess(persons)))
            .catch(() => dispatch(personsHasErrored(true)));
    }
}