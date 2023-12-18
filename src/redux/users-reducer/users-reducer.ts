import {v1} from "uuid";


export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationUsersType
}
type LocationUsersType = {
    city: string
    country: string
}

export type InitialUsersStateType = typeof initialState;
const initialState = {
    // users: []
    users: [
        {
            id: v1(),
            photoUrl: '../../public/assets/person/person0.jpeg',
            followed: false, fullName: 'Kirych', status: 'Ama lolos and we going to job, again again again again again',
            location: {
                city: 'EKB',
                country: 'Russia',
            }
        },
        {
            id: v1(),
            photoUrl: '../../public/assets/person/person0.jpeg',
            followed: true, fullName: 'Dianych', status: 'I am on elephant yaaay!',
            location: {
                city: 'EKB',
                country: 'Russia',
            }
        },
        {
            id: v1(),
            photoUrl: '../../public/assets/person/person0.jpeg',
            followed: false, fullName: 'Evgeny', status: 'Lived in colhozee',
            location: {
                city: 'Moscow',
                country: 'Russia',
            }
        },
    ]
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
                ...state, users: [...state.users, action.payload.users]
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
            users: {
                id: v1(),
                photoUrl: '',
                followed: false,
                fullName: 'XXXX',
                status: 'XXXXXX',
                location: {
                    city: 'XXXX',
                    country: 'XXXX',
                }
            }

        }
    } as const
}
