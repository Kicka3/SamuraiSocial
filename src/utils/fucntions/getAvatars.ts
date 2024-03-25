import {store} from "../../redux/redux-store";
import noUserAvatar from "../../assets/images/avatars/noAvatar.jpeg";


export const getUsrAvatar = (value: string) => {
    const userStore = store.getState()

    const avatars = userStore.profilePage.profile?.photos
    const userId = userStore.auth.id
    // const avatars = userStore.auth.avatarCurrenUser.small

    

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