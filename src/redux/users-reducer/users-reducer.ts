import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {updateObjInArray} from "../../utils/objects-helpers/object-helper";


export type ResponseUsersType = {
    id: string,
    name: string,
    status: string,
    photos: PhotosUserType,
    followed: boolean,
    totalCount: number,
    error: string,
}
type PhotosUserType = {
    small: string
    large: string
}

export type InitialUsersStateType = {
    users: ResponseUsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}

export type MainProfileReducerType = FollowSuccessACType
    | UnFollowSuccessACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUserCountACType
    | ToggleIsFetchingACType
    | ToggleFollowingProgressType

let initialState = {
    users: [] as ResponseUsersType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: MainProfileReducerType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            debugger
            return {
                ...state, users: updateObjInArray(state.users, action.payload.userId, 'id', {followed: true})
                // state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            debugger
            return {
                ...state, users:
                    updateObjInArray(state.users, action.payload.userId, 'id', {followed: false})
                // state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS": {
            return {
                ...state, users: action.payload.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-TOTAL-USER-COUNT": {
            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.value}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default:
            return state
    }
}

export type FollowSuccessACType = ReturnType<typeof followSuccessAC>

export const followSuccessAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export type UnFollowSuccessACType = ReturnType<typeof unfollowSuccessAC>
export const unfollowSuccessAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: ResponseUsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage,
        }
    } as const
}

export type SetTotalUserCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {
            totalCount
        }

    } as const
}

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (value: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            value
        }
    } as const
}

type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgressAC>
export const toggleFollowingProgressAC = (userId: string, isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            userId,
            isFetching
        }
    } as const
}

//Thunks
export const getUserTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPageAC(page));

        const response = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsersAC(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    } catch (e) {
        console.log(e)
    }
}

export const setUserTC = (pageNumber: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPageAC(pageNumber));

        const response = await usersAPI.getUsers(pageNumber, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsersAC(response.items));
    } catch (e) {
        console.log(e)
    }
}

const followUnfollowFlow =
    async (dispatch: Dispatch, userId: string, apiMethod: (id: string) => Promise<any>,
           actionCreator: (userId: string) => FollowSuccessACType | UnFollowSuccessACType): Promise<void> => {
        try {
            dispatch(toggleFollowingProgressAC(userId, true));
            const response = await apiMethod(userId);

            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId));
            }
            dispatch(toggleFollowingProgressAC(userId, false));
        } catch (e) {
            console.log(e)
        }
    }


export const followTC = (userId: string) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccessAC.bind(userId));
}

export const unfollowTC = (userId: string) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(userId), unfollowSuccessAC.bind(userId));
}
