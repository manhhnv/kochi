import Axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "../../service/user.service";
import { LoginInput, RegisterInput } from "../../types";

export const LOGIN = "LOGIN";

export const userRegister = async (input: RegisterInput, callback?: any) => {
    Axios.post(`${USER_REGISTER.url}`, input)
        .then(res => {
            if (res.data != null) {
                console.log(res.data)
            }
        })
        .catch(e => {
            console.log(e)
        })
}

export const userLogin = (input: LoginInput) => {
    return async (dispatch: any) => {
        Axios.post(`${USER_LOGIN.url}`, input)
            .then(res => {
                if (res.data !== null) {
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