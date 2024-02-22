import {
    addPostAC, InitialProfileStateType,
    updatePostNewTextAC
} from "../../../redux/profile-reducer/profile-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";



export type PostsPropsType = mapStateToPropsType & MapDispatchToPropsType

type mapStateToPropsType = {
    posts: InitialProfileStateType
    newPostText: InitialProfileStateType
}
type MapDispatchToPropsType = {
    addNewPost: (newText: string) => void
    // updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage,
        newPostText: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: string) => {
            const action = addPostAC(newPostText);
            dispatch(action);
        },
        // updateNewPostText: (newText: string) => {
        //     const action = updatePostNewTextAC(newText);
        //     dispatch(action);
        // },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);