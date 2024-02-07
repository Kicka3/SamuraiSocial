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


export type InitialUsersStateType = typeof initialState;


let initialState = {
    users: [] as ResponseUsersType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
}

export type MainProfileReducerType = FollowAC
    | UnFollowAC
    | SetUsersAC
    | SetCurrentPageACType
    | SetTotalUserCountACType
    | ToggleIsFetchingACType
    | SetFollowingProgress

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
            return {...state, followingInProgress: action.payload.value}
        }
        default:
            return state
    }
}

export type FollowAC = ReturnType<typeof follow>
export const follow = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export type UnFollowAC = ReturnType<typeof unFollow>
export const unFollow = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export type SetUsersAC = ReturnType<typeof setUsers>
export const setUsers = (users: ResponseUsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
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

type SetFollowingProgress = ReturnType<typeof setFollowingProgress>
export const setFollowingProgress = (value: boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            value
        }
    } as const
}
