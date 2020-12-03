import { LOGIN } from '../actions/userAction';
import { Action } from '../../types';

const initialState = {
    token: '',
    user: null
}

const userReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case LOGIN:
            return { ...state, token: action.payload }
        default:
            return state;
    }
}
export default userReducer;