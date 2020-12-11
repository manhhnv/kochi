import {
    VOCABULARY_GET_BYCATEGORY, VOCABULARY_GET_BYLESSON, GET_QUESTION_VOCABULARY
} from '../actions/vocabularyAction';
import { Action } from '../../types';

const initialState = {
    lessons: [] as any,
    categories: [] as any,
    lists: [] as any
}

const vocabularyReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case VOCABULARY_GET_BYCATEGORY:
            return { ...state, categories: action.payload }
        case VOCABULARY_GET_BYLESSON:
            return { ...state, lessons: action.payload }
        case GET_QUESTION_VOCABULARY:
            return { ...state, lists: action.payload }
        default:
            return state;
    }
}

export default vocabularyReducer;