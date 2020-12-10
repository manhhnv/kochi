import { getListeningByCategory } from '../../data/getListeningByCategory';

export const GET_LISTENING_LESSON_TOPIC = "GET_LISTENING_LESSON_TOPIC";
export const GET_LISTENING_LESSON_CONVERSATION = "GET_LISTENING_LESSON_CONVERSATION";
export const GET_LISTENING_LESSON_REPLY = "GET_LISTENING_LESSON_REPLY";

export const getLessons = (token: string, category: string, callback?: any) => {
    return async (dispatch: any) => {
        console.log("Action")
        const lessons = await getListeningByCategory(category);
        switch(category) {
            case "topic":
                dispatch({
                    type: GET_LISTENING_LESSON_TOPIC,
                    payload: lessons
                })
                break;
            case "conversation":
                dispatch({
                    type: GET_LISTENING_LESSON_CONVERSATION,
                    payload: lessons
                })
                break;
            case "reply":
                dispatch({
                    type: GET_LISTENING_LESSON_REPLY,
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