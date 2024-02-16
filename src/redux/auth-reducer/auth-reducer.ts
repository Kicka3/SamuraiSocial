import {PhotosProfileType} from "../profile-reducer/profile-reducer";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../../../src/api/API";

export type AuthResponseType = {
    resultCode: number
    messages: [],
    data: InitialAuthStateType | null
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
            return {...state, ...action.payload.data, isAuth: true};
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
export const setAuthUserDataAC = (email: string, id: number, login: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data: {
                email,
                id,
                login,
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

export const getAuthMeTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                const {email, id, login} = data.data;
                dispatch(setAuthUserDataAC(email, id, login));
            }
        })
        .catch(err => console.log(err));
}