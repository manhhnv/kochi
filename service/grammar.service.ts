import { Api, HTTP_METHOD } from "../types";
import { API_URL } from '../env';

export const GRAMMAR_GET_ALL: Api = {
    url: `${API_URL}/grammar/getAll`,
    method: HTTP_METHOD.GET
}

export const GET_BY_ID: Api = {
    url: `${API_URL}/get-grammar/byId`,
    method: HTTP_METHOD.GET
}

export const GET_QUESTIONS_GRAMMAR: Api = {
    url: `${API_URL}/get-questions/all`,
    method: HTTP_METHOD.GET
}

export const CHECK_ANSWER_GRAMMAR : Api = {
    url: `${API_URL}/get-questions/all`,
    method: HTTP_METHOD.POST
}