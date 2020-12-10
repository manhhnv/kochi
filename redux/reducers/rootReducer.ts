import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import userReducer from "./userReducer";
import readingReducer from "./readingReducer";
import listeningReducer from "./listeningReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    user: userReducer,
    reading: readingReducer,
    listening: listeningReducer
})

export default rootReducer;