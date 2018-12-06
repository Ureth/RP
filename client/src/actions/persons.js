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

export function personsUpdated(bool) {
    return {
        type: "PERSONS_WAS_UPDATED",
        wasUpdated: bool
    }
}

export function personsFetchData(url) {
    return dispatch => {
        dispatch(personsIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(personsIsLoading(false));
                dispatch(personsUpdated(false));
                return response;
            })
            .then(response => response.json())
            .then(persons => dispatch(personsFetchDataSuccess(persons)))
            .catch(() => dispatch(personsHasErrored(true)));
    }
}

export function personsPushData(url, data) {
    return dispatch => {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                dispatch(personsUpdated(true));
                return response
            })
            .then(response => response.json())
            .then(persons => console.log(persons))
            .catch(()=>{})
    }
}

export function personsUpdateData(url, data) {
    return dispatch => {
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                dispatch(personsUpdated(true));
                return response
            })
            .then(response => response.json())
            .then(persons => console.log(persons))
            .catch(()=> {})
    }
}

export function personsDeleteData(url) {
    return dispatch => {
        fetch(url, {
            method: "DELETE"
        })
            .then(response => {
                dispatch(personsUpdated(true));
                return response
            })
            .then(response => response.json())
            .catch(()=> {console.log("Error with deleting")})
    }
}