import { Api, HTTP_METHOD } from "../types";
import { API_URL } from '../env';

export const GET_EXAM: Api = {
    url: `${API_URL}/exam/random`,
    method: HTTP_METHOD.GET
}

export const CHECK_ANSWER_EXAM : Api = {
    url: `${API_URL}/get-questions/all`,
    method: HTTP_METHOD.POST
}