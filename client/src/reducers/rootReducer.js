import { combineReducers } from "redux";
import { persons, personsHasErrored, personsIsLoading, personsUpdated } from "./persons";

const rootReducer = combineReducers({
    persons,
    personsHasErrored,
    personsIsLoading,
    personsUpdated
});

export default rootReducer;