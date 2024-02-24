import {
    addPostAC, InitialProfileStateType,
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
}
type MapDispatchToPropsType = {
    addNewPost: (newPostText: AddNewPostFormType) => void
}

const mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage,
        newPostText: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: AddNewPostFormType) => {
            const action = addPostAC(newPostText);
            dispatch(action);
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);