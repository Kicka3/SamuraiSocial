
type PhotosUserType = {
    small: 'kek',
    large: 'kek2',
}
export type UsersType = {
    id: string,
    name: string,
    status: string,
    photos: PhotosUserType,
    followed: boolean,
    totalCount: number,
    error: string,

    // location: LocationUsersType
}
// export type UsersType = {
//     id: string
//     name: string
//     status: string
//     photos: PhotosUserType
//     followed: boolean
//     location: LocationUsersType
// }
type LocationUsersType = {
    city: string
    country: string
}

export type InitialUsersStateType = typeof initialState;


let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
}

export type MainProfileReducerType = FollowAC | UnFollowAC | SetUsersAC
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
                ...state, users: [...state.users, ...action.payload.users]
            }
        }
        default:
            return state
    }
}

export type FollowAC = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export type UnFollowAC = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users,
            // users: {
            //     id: v1(),
            //     photos: '',
            //     followed: false,
            //     fullName: 'XXXX',
            //     status: 'XXXXXX',
            //     location: {
            //         city: 'XXXX',
            //         country: 'XXXX',
            //     }
            // }

        }
    } as const
}
