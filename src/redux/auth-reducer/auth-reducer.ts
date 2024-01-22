// export type AuthResponseType = {
//     resultCode: number
//     messages: [],
//     data: InitialAuthStateType | null
// }

import {PhotosProfileType} from "../profile-reducer/profile-reducer";

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

//AC
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (email: string, id: number, login: string) => {
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
