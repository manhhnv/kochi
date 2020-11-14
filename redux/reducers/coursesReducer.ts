import { VocabularyActionType } from './../../types';
import { GET_VOCABULARY_LESSON } from '../actions/coursesAction';

const initialState = {
    vocabularies: [],
    totalWords: 0,
    from: 0,
    to: 0
}

const coursesReducer = (state = initialState, action: VocabularyActionType) => {
    switch(action.type) {
        case GET_VOCABULARY_LESSON:
            return {
                ...state,
                ...{
                    vocabularies: action.payload?.data,
                    totalWords: action.payload?.totalWords,
                    from: action.payload?.from,
                    to: action.payload?.to
                }
            }
        default:
            return state
    }
}
export default coursesReducer;