import { getReadingByCategory } from '../../data/getReadingByCategory';

export const GET_SHORT_READING_LESSONS = "GET_SHORT_READING_LESSONS";
export const GET_MEDIUM_READING_LESSONS = "GET_MEDIUM_READING_LESSONS";
export const GET_LONG_READING_LESSONS = "GET_LONG_READING_LESSONS";

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