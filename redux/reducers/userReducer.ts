import { LOGIN, ME, LOGOUT } from '../actions/userAction';
import { Action } from '../../types';

const initialState: any = {
    token: null,
    user: null
}

const userReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case LOGIN:
            console.log(action)
            return { ...state, token: action.payload }
        case ME:
            return { ...state, user: action.payload }
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}
export default userReducer;