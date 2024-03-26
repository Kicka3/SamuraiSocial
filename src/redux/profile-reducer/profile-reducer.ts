import {v1} from "uuid";
import {AnyAction, Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../api/api";
import {AddNewPostFormType} from "../../../src/components/profile/myPosts/share/addNewPostForm/AddNewPostForm";
import {
    ProfileContactsFormDataType
} from "../../components/profile/rightbar/profileContacts/profileContactsForm/ProfileContactsForm";
import {RootReduxStoreType} from "../redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

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
    userId: number | undefined;
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
    small: string | null;
    large: string | null;
}

export type InitialProfileStateType = {
    postsData: PostsType[]
    postText: string
    profile: ProfileResponseType | null
    status: string
    updateProfileStatus: boolean
}

export type MainProfileReducerType = AddPostACType
    | SetUserProfileACType
    | SetUserStatusACType
    | DeletePostACType
    | SavePhotoACType
    | IsUpdatingACType
|LikesCounterACType

export const initialState: InitialProfileStateType = {
    postsData: [
        //fake posts
        {id: v1(), message: "First Fake Jopa1 post", likesCount: 5},
        {id: v1(), message: "Second fake Jopa2 Post", likesCount: 25},
    ] as PostsType[],
    postText: '',
    profile: null,
    status: '',
    updateProfileStatus: false
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
        case 'SET-USER-PHOTO': {
            if (state.profile) {
                return {
                    ...state,
                    profile: {...state.profile, photos: {...state.profile.photos, small: action.payload.userPhoto}}
                }
            } else {
                return {...state}
            }
        }
        case 'SET-PROFILE-UPDATING' : {
            return {...state, updateProfileStatus: action.payload.status}
        }
        case 'LIKES-COUNTER' : {
            return {...state, postsData: state.postsData.map(el => el.id === action.payload.postId ? {...el, likesCount: el.likesCount + 1} : el)}
        }
        default:
            return state
    }
}

//Actions
type LikesCounterACType = ReturnType<typeof likesCounterAC>
export const likesCounterAC = (postId: string) => {
    return {
        type: 'LIKES-COUNTER',
        payload: {
            postId
        }
    } as const
}
// ======
type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: AddNewPostFormType) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPostText
        }
    } as const
}

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profileData: ProfileResponseType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profileData
        }
    } as const
}

type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        payload: {
            status
        }
    } as const
}

type DeletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (postId: string) => {
    return {
        type: 'DELETE-POST',
        payload: {
            postId
        }
    } as const
}

type SavePhotoACType = ReturnType<typeof savePhotoAC>
export const savePhotoAC = (userPhoto: string) => {
    return {
        type: 'SET-USER-PHOTO',
        payload: {
            userPhoto
        }
    } as const
}

type IsUpdatingACType = ReturnType<typeof isUpdatingAC>
export const isUpdatingAC = (status: boolean) => {
    return {
        type: 'SET-PROFILE-UPDATING',
        payload: {
            status
        }
    } as const
}

//Thunks

export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const response = await usersAPI.profile(userId);
        dispatch(setUserProfile(response));
    } catch (e) {
        console.log(`Error in getUserProfileTC` + e)
    }
}

export const getUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.getStatus(status)
        dispatch(setUserStatusAC(response));
    } catch (e) {
        console.log(`Error in getUserStatusTC` + e)
    }
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    dispatch(isUpdatingAC(true))
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setUserStatusAC(status));
            dispatch(isUpdatingAC(false))
        }
    } catch (e) {
        console.log(`Error in updateUserStatusTC` + e)
        dispatch(isUpdatingAC(false))
        dispatch(stopSubmit('login', {_error: e}));
    }
}

export const savePhotoTC = (userPhoto: File) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await profileAPI.savePhoto(userPhoto)
            if (response.data.resultCode === 0) {
                dispatch(savePhotoAC(response.data.photos));
            }
        } catch (e) {
            console.log(`Error in savePhotoTC` + e)
        }
    };
}

type ThunkResult<R> = ThunkAction<R, RootReduxStoreType, unknown, AnyAction>;
export const saveProfileInfoTC = (formData: ProfileContactsFormDataType): ThunkResult<void> => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        if (userId === null) {
            console.log('User ID is null');
            return;
        }
        try {
            const response = await profileAPI.saveProfile(formData);
            if (response.resultCode === 0) {
                await dispatch(getUserProfileTC(userId.toString()));
                console.log(response)
            } else {
                dispatch(stopSubmit('contacts', {_error: response.data.messages[0]}));
                // dispatch(stopSubmit('contacts', {"contacts": {_error: response.data.messages[0]}}));
                console.log(response.data.messages);
                return Promise.reject(response.data.messages[0])
            }
        } catch (e) {
            console.log(`Error in saveProfileInfo` + e);
        }
    };
}

export default profileReducer;