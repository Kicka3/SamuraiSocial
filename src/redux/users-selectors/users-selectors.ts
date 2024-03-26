import {RootReduxStoreType} from "../redux-store";
import {createSelector} from "reselect";

const getUsers = (state: RootReduxStoreType) => {
    return state.usersPage;
}
const getProfile = (state: RootReduxStoreType) => {
    return state.profilePage.profile;
}

//With RESELECT LB
export const getUsersSelector = createSelector(getUsers, (users: any) => {
    return users;
})
export const getUserProfile = createSelector(getProfile, (profile: any) => {
    return profile;
})


// =======
export const getPageSize = (state: RootReduxStoreType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: RootReduxStoreType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: RootReduxStoreType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: RootReduxStoreType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: RootReduxStoreType) => {
    return state.usersPage.followingInProgress;
}

export const getProfileAvatars = (state: RootReduxStoreType) => {
    return state.profilePage.profile?.photos.small;
}

