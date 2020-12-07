import {
    GET_SHORT_READING_LESSONS, GET_MEDIUM_READING_LESSONS, GET_LONG_READING_LESSONS
} from '../actions/readingAction';
import { Action } from '../../types';

const initialState = {
    short: [] as any,
    medium: [] as any,
    long: [] as any
}

const readingReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case GET_SHORT_READING_LESSONS:
            return { ...state, short: action.payload }
        case GET_MEDIUM_READING_LESSONS:
            return { ...state, medium: action.payload }
        case GET_LONG_READING_LESSONS:
            return { ...state, long: action.payload }
        default:
            return state;
    }
}

export default readingReducer;