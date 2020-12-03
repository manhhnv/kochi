import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    user: userReducer
})

export default rootReducer;