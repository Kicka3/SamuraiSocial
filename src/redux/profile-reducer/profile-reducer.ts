import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../../src/api/API";


export type MainProfileReducerType = AddPostACType
    | UpdatePostNewTextACType
    | SetUserProfileACType
    | SetUserStatusACType

export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}


export type ProfileResponseType = {
    aboutMe: string;
    contacts: ContactsProfileType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosProfileType;
}
export type ContactsProfileType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}
export type PhotosProfileType = {
    small: string;
    large: string;
}


export type InitialProfileStateType = {
    postsData: PostsType[]
    newPostText: string
    profile: ProfileResponseType | null
    status: string
}

export const initialState: InitialProfileStateType = {
    postsData: [
        //fake posts
        {id: v1(), message: "Jopa", likesCount: 5},
        {id: v1(), message: "My little Jopa", likesCount: 25},
    ] as PostsType[],
    newPostText: 'Whussap?',
    profile: null,
    status: ''
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
            return {...state, profile: action.payload.profileData}
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}

//Actions

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

export type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profileData: ProfileResponseType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profileData
        }
    } as const
}

export type SetUserStatusACType = ReturnType<typeof SetUserStatusAC>
export const SetUserStatusAC = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        payload: {
            status
        }
    } as const
}

//Thunks

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.profile(userId)
        .then((res) => {
            dispatch(setUserProfile(res));
        })
        .catch(err => {
            console.log('Error in get user' + err);
        })
}

export const getUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(status)
        .then((res) => {
            dispatch(SetUserStatusAC(res.aboutMe));
        })
        .catch(err => {
            console.log('Error in set user status' + err);
        })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(SetUserStatusAC(status));
            }
        })
        .catch(err => {
            console.log('Error in set user status' + err);
        })
}

export default profileReducer;