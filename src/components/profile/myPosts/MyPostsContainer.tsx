import {
    addPostAC, InitialProfileStateType, likesCounterAC,
} from "../../../redux/profile-reducer/profile-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {AddNewPostFormType} from "../../profile/myPosts/share/addNewPostForm/AddNewPostForm";


export type PostsPropsType = mapStateToPropsType & MapDispatchToPropsType

type mapStateToPropsType = {
    posts: InitialProfileStateType
    newPostText: InitialProfileStateType
    userAvatars?: string | null | undefined
    userName: string | null | undefined
}
type MapDispatchToPropsType = {
    addNewPost: (newPostText: AddNewPostFormType) => void
    setCountLikes: (postId: string) => void
}

const mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage,
        newPostText: state.profilePage,
        userAvatars: state.profilePage.profile?.photos.small,
        userName: state.profilePage.profile?.fullName,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: AddNewPostFormType) => {
            const action = addPostAC(newPostText);
            dispatch(action);
        },
        setCountLikes: (postId: string) => {
            dispatch(likesCounterAC(postId))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);