import {
    GET_LISTENING_LESSON_CONVERSATION, GET_LISTENING_LESSON_REPLY, GET_LISTENING_LESSON_TOPIC
} from '../actions/listeningAction';
import { Action } from '../../types';
const initial = {
    topic: [] as any,
    conversation: [] as any,
    reply: [] as any
}

const listeningReducer = (state = initial, action: Action) => {
    switch(action.type) {
        case GET_LISTENING_LESSON_TOPIC:
            return { ...state, topic: action.payload }
        case GET_LISTENING_LESSON_CONVERSATION:
            return { ...state, conversation: action.payload }
        case GET_LISTENING_LESSON_REPLY:
            return { ...state, reply: action.payload }
        default:
            return state;
    }
}
export default listeningReducer;