import { Api, HTTP_METHOD } from "../types";
import { API_URL } from '../env';

export const VOCABULARY_GET_ALL: Api = {
    url: `${API_URL}/vocabulary/getAll`,
    method: HTTP_METHOD.GET
}

export const GET_BY_ID: Api = {
    url: `${API_URL}/vocabulary/byId`,
    method: HTTP_METHOD.GET
}

export const VOCABULARY_GET_BYCATEGORY: Api ={
    url: `${API_URL}/vocabulary/category/getAll`,
    method: HTTP_METHOD.GET
}
export const VOCABULARY_GET_BYLESSON: Api ={
    url: `${API_URL}/vocabulary/category/lession/getAll`,
    method: HTTP_METHOD.GET
}
export const GET_QUESTION_VOCABULARY: Api ={
    url: `${API_URL}/vocabulary/question/getAll`,
    method: HTTP_METHOD.GET
}