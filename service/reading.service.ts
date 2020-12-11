import { Api, HTTP_METHOD } from "../types";
import { API_URL } from '../env';

export const GET_READING: Api = {
    url: `${API_URL}/reading`,
    method: HTTP_METHOD.GET
}

export const CHECK_ANSWER_READING : Api = {
    url: `${API_URL}/get-questions/all`,
    method: HTTP_METHOD.POST
}