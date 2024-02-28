import axios from "axios";
import {LoginResponseType} from "../redux/auth-reducer/auth-reducer";

export const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'cd5674b1-8493-4311-be42-604cd0d05e42'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(data => data.data)
            .catch((e) => console.log('getUsersSelector Error ' + e));
    },
    unFollow: (id: string) => {
        return instance.delete(`follow/${id}`)
            .then(data => data.data)
            .catch((e) => console.log('unFollow Error ' + e));
    },
    follow: (id: string) => {
        return instance.post(`/follow/${id}`)
            .then(data => data.data)
            .catch((e) => console.log('follow Error ' + e));
    },
    profile: (userId: string) => {
        console.log('Obsolete method. Pls profileAPI object')
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
            .then(data => {
                return data.data
            })
            .catch(e => console.log('profileAPI profile Error ' + e));
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
            .then(data => {
                return data.data
            })
            .catch(e => console.log('profileAPI status Error ' + e));
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
            .then(data => {
                return data.data
            })
            .catch(e => console.log('profileAPI status Error ' + e));
    }
}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
            .then((data) => data.data)
            .catch((e) => console.log('authAPI Error ' + e));
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<LoginResponseType>('/auth/login', {email, password, rememberMe})
            .then(data => {
                console.log(data.data)
               return data.data})
    },
    logout: () => {
        return instance.delete('/auth/login')
            .then(data => data.data)
            .catch(e => console.log('authAPI Error ' + e));
    }
}
