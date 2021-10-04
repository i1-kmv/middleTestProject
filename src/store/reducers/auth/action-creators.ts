import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./Types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user }),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const mockUser = await axios.get('./users.json')
            console.log(mockUser)
        } catch (e) {

        }
    },
    logout: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {

        } catch (e) {
            dispatch(AuthActionCreators.setError('Err'))
        }
    }

}