import {v1} from "uuid";
import {MainReducerType, ProfilePageType} from "./state";


const ProfileReducer = (state: ProfilePageType, action: MainReducerType): ProfilePageType => {
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

export default ProfileReducer;