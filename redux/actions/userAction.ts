import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from "axios";
import { USER_LOGIN, USER_REGISTER, QUERY_ME } from "../../service/user.service";
import { LoginInput, RegisterInput } from "../../types";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ME = "ME";

export const userRegister = async (input: RegisterInput, callback?: any) => {
    const response = Axios.post(`${USER_REGISTER.url}`, input)
        .then(res => {
            if (res.data !== null && res.data?.data) {
                return res.data.data
            }
        })
        .catch(e => {
            console.log(e)
        })
    return response;
}

export const userLogin = (input: LoginInput) => {
    return async (dispatch: any) => {
        Axios.post(`${USER_LOGIN.url}`, input)
            .then(async res => {
                if (res.data !== null) {
                    await AsyncStorage.setItem('token', res.data.data.accessToken)
                    dispatch({
                        type: LOGIN,
                        payload: res.data.data.accessToken
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}
export const me = (token: string) => {
    return async (dispatch: any) => {
        Axios.get(`${QUERY_ME.url}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if (res.data && res.data?.data) {
                dispatch({
                    type: ME,
                    payload: res.data.data
                })
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}
export const logout = (token: string) => {
    return (dispatch: any) => {
        dispatch({
            type: LOGOUT,
            payload: null
        })
    }
}