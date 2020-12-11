import { getReadingByCategory } from '../../data/getReadingByCategory';
import {getVocabularyLesson,getVocabularyCategory,getVocabularyList} from "../../data/vocabulary/getVocabularyContent";

export const VOCABULARY_GET_BYCATEGORY = "VOCABULARY_GET_BYCATEGORY";
export const VOCABULARY_GET_BYLESSON = "VOCABULARY_GET_BYLESSON";
export const GET_QUESTION_VOCABULARY = "GET_QUESTION_VOCABULARY";

export const getAllReadingLessons = (token: string, id: number,categoryId:number, callback?: any) => {
    return async (dispatch: any) => {
        const lessons = getVocabularyLesson(id);
        const categories = getVocabularyCategory();
        const lists = getVocabularyList(categoryId,id)
        
        switch(id) {
            case 1:
                dispatch({
                    type: VOCABULARY_GET_BYCATEGORY,
                    payload: categories
                })
                break;
            case 2:
                dispatch({
                    type: VOCABULARY_GET_BYLESSON,
                    payload: lessons
                })
                break;
            case 3:
                dispatch({
                    type: GET_QUESTION_VOCABULARY,
                    payload: lists
                })
                break;
            default:
                return null;
        }
        if (callback) {
            callback(false)
        }
    }
}