import { Api, HTTP_METHOD } from "../types";
import { API_URL } from '../env';

export const USER_REGISTER: Api = {
    url: `${API_URL}/users/create`,
    method: HTTP_METHOD.POST
}

export const USER_LOGIN: Api = {
    url: `${API_URL}/auth/login`,
    method: HTTP_METHOD.POST
}

export const QUERY_ME: Api ={
    url: `${API_URL}/auth/me`,
    method: HTTP_METHOD.GET
}