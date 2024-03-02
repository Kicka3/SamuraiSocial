import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../../src/api/API";
import {AddNewPostFormType} from "../../../src/components/profile/myPosts/share/addNewPostForm/AddNewPostForm";


export type MainProfileReducerType = AddPostACType
    | SetUserProfileACType
    | SetUserStatusACType
    | DeletePostACType

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
    postText: string
    profile: ProfileResponseType | null
    status: string
}

export const initialState: InitialProfileStateType = {
    postsData: [
        //fake posts
        {id: v1(), message: "First Fake Jopa1 post", likesCount: 5},
        {id: v1(), message: "Second fake Jopa2 Post", likesCount: 25},
    ] as PostsType[],
    postText: '',
    profile: null,
    status: ''
}


const profileReducer = (state: InitialProfileStateType = initialState, action: MainProfileReducerType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                message: action.payload.newPostText.newPostText,
                likesCount: 0
            }
            return {...state, postsData: [newPost, ...state.postsData]}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profileData}
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.payload.status}
        }
        case 'DELETE-POST': {
            return {...state, postsData: state.postsData.filter(p => p.id !== action.payload.postId)}
        }
        default:
            return state
    }
}

//Actions
export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: AddNewPostFormType) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPostText
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

export type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        payload: {
            status
        }
    } as const
}

export type DeletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (postId: string) => {
    return {
        type: 'DELETE-POST',
        payload: {
            postId
        }
    } as const
}

//Thunks

export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await usersAPI.profile(userId);
    dispatch(setUserProfile(response));

    // .catch(err => {
    //     console.log('Error in get user' + err);
    // })
}

export const getUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(status)
    dispatch(setUserStatusAC(response));

    // .catch(err => {
    //     console.log('Error in set user status' + err);
    // })
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatusAC(status));
    }

    // .catch(err => {
    //     console.log('Error in set user status' + err);
    // })
}

export default profileReducer;