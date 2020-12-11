import Axios from 'axios';
import { getReadingByCategory } from '../../data/getReadingByCategory';
import { GET_READING, CHECK_ANSWER_READING } from '../../service/reading.service';

export const GET_SHORT_READING_LESSONS = "GET_SHORT_READING_LESSONS";
export const GET_MEDIUM_READING_LESSONS = "GET_MEDIUM_READING_LESSONS";
export const GET_LONG_READING_LESSONS = "GET_LONG_READING_LESSONS";
export const GET_ALL_READING_LESSONS = "GET_ALL_READING_LESSONS";

export const getReadingLessons = () => {
    return async(dispatch: any) => {
        Axios.get(`${GET_READING}`)
        .then(res => {
            if (res.data !== null) {
                dispatch({
                    type: GET_ALL_READING_LESSONS,
                    payload: res.data
                })
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}
export const checkAnswerReading = (input: any) => {
    return async(dispatch: any) => {
        Axios.post(`${CHECK_ANSWER_READING}`, {
            input: input
        })
        .then(res => {
            if (res.data !== null) {
                dispatch({
                    type: "UPDATE_HISTORY"
                })
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}
export const getAllReadingLessons = (token: string, readingCategory: number, callback?: any) => {
    return async (dispatch: any) => {
        const lessons = getReadingByCategory(readingCategory);
        switch(readingCategory) {
            case 1:
                dispatch({
                    type: GET_SHORT_READING_LESSONS,
                    payload: lessons
                })
                break;
            case 2:
                dispatch({
                    type: GET_MEDIUM_READING_LESSONS,
                    payload: lessons
                })
                break;
            case 3:
                dispatch({
                    type: GET_LONG_READING_LESSONS,
                    payload: lessons
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