import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import userReducer from "./userReducer";
import readingReducer from "./readingReducer";
import listeningReducer from "./listeningReducer";
import grammarReducer from "./grammarReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    user: userReducer,
    reading: readingReducer,
    listening: listeningReducer,
    grammar: grammarReducer
})

export default rootReducer;