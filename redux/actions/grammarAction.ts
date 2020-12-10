import { grammarData } from '../../data/grammarData';

export const GET_ALL_GRAMMARS = "GET_ALL_GRAMMARS";

export const getAllGrammar = (token: string, callback?: any) => {
    return async (dispatch: any) => {
        dispatch({
            type: GET_ALL_GRAMMARS,
            payload: grammarData
        })
    }
}
export const getGrammarById = async (grammarId: number) => {
    for (let i: number = 0; i < grammarData.length ; i++) {
        if (grammarData[i].id == grammarId) {
            return grammarData[i];
        }
    }
    return null;
}