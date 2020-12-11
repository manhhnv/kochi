import Axios from 'axios';
import { getReadingByCategory } from '../../data/getReadingByCategory';
import {getVocabularyLesson,getVocabularyCategory,getVocabularyList} from "../../data/vocabulary/getVocabularyContent";
import { VOCABULARY_GET_ALL,
    GET_BY_ID, VOCABULARY_GET_BY_CATEGORY,
    GET_QUESTION_VOCABULARY_API,
    VOCABULARY_GET_BY_LESSON } from '../../service/vocabulary.service';

export const VOCABULARY_GET_BYCATEGORY = "VOCABULARY_GET_BYCATEGORY";
export const VOCABULARY_GET_BYLESSON = "VOCABULARY_GET_BYLESSON";
export const GET_QUESTION_VOCABULARY = "GET_QUESTION_VOCABULARY";

export const getALlVocabulary = () => {
    return async (dispatch: any) => {
        Axios.get(`${VOCABULARY_GET_ALL.url}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: VOCABULARY_GET_BYCATEGORY,
                    payload: res.data
                })
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export const getVocabularyById = async (id: number) => {
    const response = Axios.get(`${GET_BY_ID}/${id}`)
    .then(res => {
        if (res.data != null) {
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
    })
    return response;
}

export const getVocabularyByCategory = (categoryId: number) => {
    const response = Axios.get(`${VOCABULARY_GET_BY_CATEGORY}/${categoryId}`)
    .then(res => {
        if (res.data) {
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
    })
    return response;
}

export const getQuestionsVocabulary = async (id: number) => {
    const response = Axios.get(`${GET_QUESTION_VOCABULARY_API.url}/${id}`)
    .then(res => {
        if (res.data !== null) {
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
    })
    return response;
}

export const getVocabularyLessonApi = async (lessonId: number) => 
{
    const response = Axios.get(`${VOCABULARY_GET_BY_LESSON}?lessonsId=${lessonId}`)
    .then(res => {
        if (res.data !== null) {
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
    })
    return response;
}
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