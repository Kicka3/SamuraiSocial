import {usersAPI} from "../../../src/api/API";
import {Dispatch} from "redux";
import {getAuthUserDataTC, setAuthUserDataAC} from "../../../src/redux/auth-reducer/auth-reducer";
import {log} from "util";

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


// export type InitialUsersStateType = typeof initialState;
export type InitialUsersStateType = {
    users: ResponseUsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}


let initialState = {
    users: [] as ResponseUsersType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export type MainProfileReducerType = FollowSuccessACType
    | UnFollowSuccessACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUserCountACType
    | ToggleIsFetchingACType
    | ToggleFollowingProgressType

export const usersReducer = (state: InitialUsersStateType = initialState, action: MainProfileReducerType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
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

export const getUserTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
        .catch(err => console.log(err))
}

export const setUserTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPageAC(pageNumber));

    usersAPI.getUsers(pageNumber, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsersAC(data.items));
        })
        .catch(err => console.log(err))
}

export const followTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(userId, true));
    usersAPI.follow(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(followSuccessAC(userId));
            }
            dispatch(toggleFollowingProgressAC(userId, false));
        })
        .catch(err => console.log(err));
}

export const unfollowTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(userId, true));
    usersAPI.unFollow(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccessAC(userId));
            }
            dispatch(toggleFollowingProgressAC(userId, false));
        })
        .catch(err => console.log(err));
}
