import {v1} from "uuid";


export type MainProfileReducerType = AddPostACType
    | UpdatePostNewTextACType
    | SetUserProfileACType


export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}


export type InitialProfileStateType = typeof initialState;

const initialState = {
    postsData: [
        {id: v1(), message: "Jopa", likesCount: 5},
        {id: v1(), message: "My little Jopa", likesCount: 25},
    ] as PostsType[],
    newPostText: 'Whussap?',
    profile: null
}


const profileReducer = (state: InitialProfileStateType = initialState, action: MainProfileReducerType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 10
            }
            state.newPostText = '';
            return {...state, postsData: [newPost, ...state.postsData]}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: state.newPostText = action.payload.newText};
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profileId}
        }
        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPostText
        }
    } as const
}
export type UpdatePostNewTextACType = ReturnType<typeof updatePostNewTextAC>
export const updatePostNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
        }
    } as const
}

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profileId: number) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profileId
        }
    } as const
}

export default profileReducer;