import axios from "axios";
import {ProfileResponseType} from "../../src/redux/profile-reducer/profile-reducer";

export const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'cd5674b1-8493-4311-be42-604cd0d05e42'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(data => data.data)
            .catch((e) => console.log('getUsers Error ' + e))
    },
    unFollow: (id: string) => {
        return instance.delete(`follow/${id}`)
            .then(data => data.data)
            .catch((e) => console.log('unFollow Error ' + e))
    },
    follow: (id: string) => {
        return instance.post(`/follow/${id}`)
            .then(data => data.data)
            .catch((e) => console.log('follow Error ' + e))
    },
    profile: (userId: string) => {
        console.log('Obsolete method. Pls profileAPI object')
        return profileAPI.profile(userId);
        // .then(data => {
        //    return  data.data
        // })
        // .catch(e => console.log('profile Error ' + e))
    }
}


export const profileAPI = {
    profile: (userId: string) => {
        return instance.get(`profile/${userId}`)
            .then(data => {
                return data.data
            })
            .catch(e => console.log('profile Error ' + e))
    }
}


export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
            .then((data) => data.data)
            .catch((e) => console.log('HeaderContainer Error ' + e))
    },

}


// try {
//     axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//         .then((res) => {
//             this.props.setUserProfile(res.data)
//         });
// } catch (e) {
//     console.log(e + 'Error in get user')
// }
