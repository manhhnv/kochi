import { VocabularyActionType } from './../../types';
import axios from 'axios';

export const GET_VOCABULARY_LESSON = "GET_VOCABULARY_LESSON";

export const getVocabularyLesson = (lessonId: number) => {
    return (dispatch: any) => {
        try {
            axios.get(`http://192.168.0.103:4000/vocabularies/${lessonId}`)
                .then(response => {
                    const action: VocabularyActionType = {
                        type: GET_VOCABULARY_LESSON,
                        payload: response.data
                    }
                    dispatch(action)
                })
        }
        catch (error) {
            console.log(error)
        }
    }
}