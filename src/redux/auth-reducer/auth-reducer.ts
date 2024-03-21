import {PhotosProfileType} from "../profile-reducer/profile-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

export type LoginResponseType = {
    resultCode: number
    messages: [],
    data: LoginDataResponseType
}
type LoginDataResponseType = {
    userId: number
}

type InitialAuthStateType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
    avatarCurrenUser: PhotosProfileType
}
export const initialState: InitialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    avatarCurrenUser: {
        large: '',
        small: '',
    }
}

export type MainProfileReducerType = SetAuthUserDataType | SetAvatarCurrentUserDataType

export const authReducer = (state: InitialAuthStateType = initialState, action: MainProfileReducerType): InitialAuthStateType => {
    switch (action.type) {

        case 'auth/SET-USER-DATA': {
            return {...state, ...action.payload.data};
        }
        case "auth/SET-AVATAR-CURRENT-USER": {
            return {...state, ...action.payload.currentAvatars}
        }
        default:
            return state
    }
}

//Actions

type SetAuthUserDataType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (email: string | null, id: number | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'auth/SET-USER-DATA',
        payload: {
            data: {
                email,
                id,
                login,
                isAuth,
            }
        }
    } as const
}

type SetAvatarCurrentUserDataType = ReturnType<typeof setAvatarCurrentUserDataType>
export const setAvatarCurrentUserDataType = (currentAvatars: PhotosProfileType) => {
    return {
        type: 'auth/SET-AVATAR-CURRENT-USER',
        payload: {
            currentAvatars
        }
    } as const
}

//Thunks

//Типизация: any
export const getAuthUserDataTC = (): any => async (dispatch: Dispatch) => {
    const response = await authAPI.me();

    if (response.resultCode === 0) {
        const {email, id, login,} = response.data;
        dispatch(setAuthUserDataAC(email, id, login, true));
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(getAuthUserDataTC());
    } else {
        const message = response.messages.length > 0 ? response.messages : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
    }

}

export const logoutTC = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
    }
}

