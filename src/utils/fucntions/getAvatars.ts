import {store} from "../../redux/redux-store";


export const getUsrAvatar = (value: string) => {
    const userStore = store.getState()
    const avatars = userStore.profilePage.profile?.photos

    console.log(avatars)

    switch (value) {
        case "small" : {
            // debugger
            const avatar = avatars?.small;
            return avatar
        }
        case "large" : {
            const avatar = avatars?.large;
            return avatar
        }
        default :{
            return null
        }
    }
}