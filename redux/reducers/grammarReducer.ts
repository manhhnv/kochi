import { Action } from "../../types";
import { GET_ALL_GRAMMARS } from "../actions/grammarAction";

const initialState = {
    list: [] as any,
    totalGrammars: 0 as number
}

const grammarReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case GET_ALL_GRAMMARS:
            return { ...state, list: action.payload, totalGrammars: action.payload.length }
        default:
            return state;
    }
}
export default grammarReducer;