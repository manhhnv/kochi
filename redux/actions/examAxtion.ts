import Axios from "axios";
import { grammarQuestions } from "../../data/grammarQuestions";
import { listeningData } from "../../data/listeningData";
import { setQuestions } from "../../data/readingQuestions";
import { GET_EXAM, CHECK_ANSWER_EXAM } from '../../service/exam.service';

export const getExam = async () => {
    const response = Axios.get(`${GET_EXAM}`)
    .then(res => {
        if (res.data !== null) {
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
    })
    return response
}
export const checkAnswerExam = (input: any) => {
    return async(dispatch: any) => {
        Axios.post(`${CHECK_ANSWER_EXAM.url}`, {
            input: input
        })
        .then(res => {
            if (res.data !== null) {
                dispatch({
                    type: "UPDATE_HISTORY",
                    payload: res.data
                })
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}
export const generateVocabulary = async () => {
    let questions = grammarQuestions[1].questions.concat(grammarQuestions[0].questions);
    questions = questions.concat(grammarQuestions[2].questions)
    const data = []
    let prev: Array<number> = [];
    for (let i: number = 0; i < 20; i++) {
        let index = Math.floor(Math.random() * 30)
        if (prev.indexOf(index) !== -1) {
            while(prev.indexOf(index) !== -1) {
                index = Math.floor(Math.random() * 30)
            }
        }
        prev.push(index);
        data.push(questions[index])
    }
    return data;
}

export const generateGrammar = async () => {
    let questions = grammarQuestions[1].questions.concat(grammarQuestions[0].questions);
    questions = questions.concat(grammarQuestions[2].questions)
    const data = []
    let prev: Array<number> = [];
    for (let i: number = 0; i < 20; i++) {
        let index = Math.floor(Math.random() * 30)
        if (prev.indexOf(index) !== -1) {
            while(prev.indexOf(index) !== -1) {
                index = Math.floor(Math.random() * 30)
            }
        }
        prev.push(index);
        data.push(questions[index])
    }
    return data;
}

export const generateListening = async () => {
    const data = [];
    for (let i: number = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * 3);
        console.log(index)
        data.push(listeningData[i].lessons[index].questions)
    }
    return data;
}

export const generateReading = async () => {
    return setQuestions;
}