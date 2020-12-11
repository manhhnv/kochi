import Axios from 'axios';
import { grammarData } from '../../data/grammarData';
import { grammarQuestions } from '../../data/grammarQuestions';

export const GET_ALL_GRAMMARS = "GET_ALL_GRAMMARS";
import { GRAMMAR_GET_ALL, GET_BY_ID, GET_QUESTIONS_GRAMMAR, CHECK_ANSWER_GRAMMAR }
    from '../../service/grammar.service';

export const getAllGrammarApi = () => {
    return async (dispatch: any) => {
        Axios.get(`${GRAMMAR_GET_ALL.url}`)
            .then(res => {
                if (res.data !== null) {
                    dispatch({
                        type: GET_ALL_GRAMMARS,
                        payload: res.data
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}
export const getGrammarByIdApi = async (id: number) => {
    const response = Axios.get(`${GET_BY_ID.url}/${id}`)
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        })
    return response;
}
export const getGrammarQuestions = (id: number) => {
    const response = Axios.get(`${GET_QUESTIONS_GRAMMAR.url}/${id}`)
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
export const getAllGrammar = (token: string, callback?: any) => {
    return async (dispatch: any) => {
        dispatch({
            type: GET_ALL_GRAMMARS,
            payload: grammarData
        })
    }
}
export const getGrammarById = async (grammarId: number) => {
    for (let i: number = 0; i < grammarData.length; i++) {
        if (grammarData[i].id == grammarId) {
            return grammarData[i];
        }
    }
    return null;
}

export const checkAnswerGrammar = async (input: any, id: number) => {
    const response = Axios.post(`${CHECK_ANSWER_GRAMMAR}/${id}`, {
        input: input
    })
    .then(res => {
        if (res.data !== null) {
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
    })
}


export const generateTestingSet = async () => {
    const questions = [];
    for (let i: number = 0; i < 3; i++) {
        let object = { id: i + 1, questions: [] as Array<any> }
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