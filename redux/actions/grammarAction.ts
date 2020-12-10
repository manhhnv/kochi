import { grammarData } from '../../data/grammarData';
import { grammarQuestions } from '../../data/grammarQuestions';

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

export const generateTestingSet = async () => {
    const questions = [];
    for (let i: number = 0; i < 3; i++) {
        let object = {id: i+1, questions: [] as Array<any>}
        let prev: any = [];
        for (let j: number = 0; j < 5; j++) {
            let index = Math.floor(Math.random() * 10)
            if (prev.indexOf(index) !== -1) {
                while (prev.indexOf(index) !== -1) {
                    index = Math.floor(Math.random() * 10)
                }
            }
            prev.push(index)
            object.questions.push(grammarQuestions[i].questions[index])
        }
        questions.push(object)
    }
    return questions;
}