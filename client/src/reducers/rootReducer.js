import { combineReducers } from "redux";
import { persons, personsHasErrored, personsIsLoading } from "./persons";

const rootReducer = combineReducers({
    persons,
    personsHasErrored,
    personsIsLoading
});

export default rootReducer;