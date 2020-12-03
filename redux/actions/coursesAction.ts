import { VocabularyActionType } from './../../types';
import axios from 'axios';

export const GET_VOCABULARY_LESSON = "GET_VOCABULARY_LESSON";

export const getVocabularyLesson = (lessonId: number) => {
    return (dispatch: any) => {
        try {
            console.log("Running")
            axios.get(`http://172.19.201.161:4000/vocabularies/${lessonId}`)
                .then(response => {
                    const action: VocabularyActionType = {
                        type: GET_VOCABULARY_LESSON,
                        payload: response.data
                    }
                    dispatch(action)
                })
                .catch(e => {
                    console.log(e)
                })
        }
        catch (error) {
            console.log(error)
        }
    }
}