import {AuthActions, AuthActionsEnum, AuthState} from "./Types";

const initialState: AuthState = {
   isAuth: false
}

export default function auth(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}