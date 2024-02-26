import {PhotosProfileType} from "../profile-reducer/profile-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../../../src/api/API";
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

        case 'SET-USER-DATA': {
            return {...state, ...action.payload.data};
        }
        case "SET-AVATAR-CURRENT-USER": {
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
        type: 'SET-USER-DATA',
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
        type: 'SET-AVATAR-CURRENT-USER',
        payload: {
            currentAvatars
        }
    } as const
}

//Thunks

export const getAuthUserDataTC = (): any => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.resultCode === 0) {
                const {email, id, login,} = res.data;
                dispatch(setAuthUserDataAC(email, id, login, true));
            }
        })
        .catch(err => console.log(err));
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                const message = res.messages.length > 0 ? res.messages : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
        .catch(err => console.log(err));
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        })
        .catch(err => console.log(err));
}