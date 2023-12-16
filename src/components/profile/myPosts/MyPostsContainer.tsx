import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    updatePostNewTextAC
} from "../../../redux/profile-reducer/profile-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: RootReduxStoreType) => {
    return {
        posts: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addNewPost: (newPostText: string) => {
            const action = addPostAC(newPostText);
            dispatch(action);
        },
        updateNewPostText: (newText: string) => {
            const action = updatePostNewTextAC(newText);
            dispatch(action);
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)