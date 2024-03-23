import axios from "axios";
import {LoginResponseType} from "../redux/auth-reducer/auth-reducer";
import {
    ProfileContactsFormDataType
} from "../components/profile/rightbar/profileContacts/profileContactsForm/ProfileContactsForm";

export const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'cd5674b1-8493-4311-be42-604cd0d05e42'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: async (currentPage: number, pageSize: number) => {
        try {
            let data = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
            return await data.data;
        } catch (e) {
            return console.log('getUsersSelector Error ' + e);
        }
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
    getProfile: async (userId: string) => {
        try {
            let data = await instance.get(`profile/${userId}`);
            return data.data
        } catch (e) {
            return console.log('profileAPI profile Error ' + e);
        }
    },
    getStatus: async (userId: string) => {
        try {
            let data = await instance.get(`profile/status/${userId}`);
            return data.data
        } catch (e) {
            return console.log('profileAPI status Error ' + e);
        }
    },
    updateStatus: async (status: string) => {
        try {
            let data = await instance.put(`profile/status`, {status});
            return data.data
        } catch (e) {
            return console.log('profileAPI status Error ' + e);
        }
    },
    savePhoto: async (userPhoto: File) => {
        const formData = new FormData();
        formData.append("image", userPhoto);
        try {
            let data = await instance.put(`profile/photo`, formData, {
                headers: {
                    'content-Type': 'multipart/form-data'
                }
            });
            return data.data
        } catch (e) {
            return console.log('Error in savePhoto ' + e);
        }
    },
    saveProfile: async (formData: ProfileContactsFormDataType) => {
        try {
            let data = await instance.put(`profile`, formData);
            console.log(data.data)
            return data.data
        } catch (e) {
            return console.log('Error in saveProfile ' + e);
        }
    }
}

export const authAPI = {
    me: async () => {
        try {
            let data = await instance.get(`auth/me`);
            return await data.data;
        } catch (e) {
            return console.log('authAPI Error ' + e);
        }
    },
    login: async (email: string, password: string, rememberMe: boolean = false) => {
        let data = await instance.post<LoginResponseType>('/auth/login', {email, password, rememberMe});
        return data.data
    },
    logout: async () => {
        try {
            let data = await instance.delete('/auth/login');
            return await data.data;
        } catch (e) {
            return console.log('authAPI Error ' + e);
        }
    }
}
