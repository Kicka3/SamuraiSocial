export type AuthResponseType = {
    resultCode: number
    messages: [],
    data: InitialAuthStateType
}

type InitialAuthStateType = {
    id: number | null
    email: string | null
    login: string | null
}
export const initialState = {
    id: null,
    email: null,
    login: null,
}

export type MainProfileReducerType = SetUserDataType

export const authReducer = (state: InitialAuthStateType = initialState, action: MainProfileReducerType): InitialAuthStateType => {
    switch (action.type) {

        case 'SET-USER-DATA': {
            return {...state, ...action.payload.data};
        }

        default:
            return state
    }
}

//AC
type SetUserDataType = ReturnType<typeof setUserData>
const setUserData = (data: AuthResponseType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data
        }
    } as const
}