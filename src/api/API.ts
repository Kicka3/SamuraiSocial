import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'cd5674b1-8493-4311-be42-604cd0d05e42'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(data => data.data)
    },
    unFollow: (id: string) => {
        return instance.delete(`follow/${id}`)
            .then(data => data.data)
    },
    follow: (id: string) => {
        return instance.post(`/follow/${id}`)
            .then(data => data.data)
    }
}
