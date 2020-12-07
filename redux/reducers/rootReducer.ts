import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import userReducer from "./userReducer";
import readingReducer from "./readingReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    user: userReducer,
    reading: readingReducer,
})

export default rootReducer;