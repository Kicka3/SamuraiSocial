import {PhotosProfileType} from "../profile-reducer/profile-reducer";
import {AnyAction, Dispatch} from "redux";
import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootReduxStoreType} from "../redux-store";

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
    captcha: string | null
}
export const initialState: InitialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    avatarCurrenUser: {
        large: '',
        small: '',
    },
    captcha: null
}

export type MainProfileReducerType = SetAuthUserDataType
    | SetAvatarCurrentUserDataType
    | getCaptchaUrlSuccessType

export const authReducer = (state: InitialAuthStateType = initialState, action: MainProfileReducerType): InitialAuthStateType => {
    switch (action.type) {

        case 'auth/SET-USER-DATA': {
            return {...state, ...action.payload.data};
        }
        case "auth/SET-AVATAR-CURRENT-USER": {
            return {...state, ...action.payload.currentAvatars}
            // return {...state, avatarCurrenUser: {...action.payload.currentAvatars}}
        }
        case "auth/GET-CAPTCHA-URL-SUCCESS": {
            return {...state, captcha: action.payload.captchaUrl};
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

type SetAvatarCurrentUserDataType = ReturnType<typeof setAvatarCurrentUserDataAC>
export const setAvatarCurrentUserDataAC = (currentAvatars: PhotosProfileType) => {
    return {
        type: 'auth/SET-AVATAR-CURRENT-USER',
        payload: {
            currentAvatars
        }
    } as const
}

type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccessAC>
export const getCaptchaUrlSuccessAC = (captchaUrl: string) => {
    return {
        type: 'auth/GET-CAPTCHA-URL-SUCCESS',
        payload: {
            captchaUrl
        }
    } as const
}

//Thunks
export const getAuthUserDataTC = (): any => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.me();
        if (response.resultCode === 0) {
            const {email, id, login,} = response.data;
            dispatch(setAuthUserDataAC(email, id, login, true));
        }
    } catch (e) {
        console.log(e)
    }
}

type ThunkResult<R> = ThunkAction<R, RootReduxStoreType, unknown, AnyAction>;
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkResult<Promise<void>> => async (dispatch: ThunkDispatch<RootReduxStoreType, unknown, AnyAction>) => {
    try {
        const response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.resultCode === 0) {
            dispatch(getAuthUserDataTC());
        } else if (response.resultCode === 10) {
            await dispatch(getCaptchaUrlTC())
            dispatch(stopSubmit('login', {_error: "Пройдите анти-бот првоерку"}));
        } else {
            const message = response.messages.length > 0 ? response.messages : 'Some error'
            dispatch(stopSubmit('login', {_error: message}));
        }
    } catch (e) {
        console.log(e)
    }
};

export const getCaptchaUrlTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.url;
        dispatch(getCaptchaUrlSuccessAC(captchaUrl))
    } catch (e) {
        console.log(e)
        dispatch(stopSubmit('login', {_error: e}));
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false));
        }
    } catch (e) {
        console.log(e)
    }
}

