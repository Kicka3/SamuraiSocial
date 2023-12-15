import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    updatePostNewTextAC
} from "../../../redux/profile-reducer/profile-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//old component
// type MyPostsPropsType = {
    // store: StoreType
// }
// export const MyPostsContainer: React.FC<MyPostsPropsType> = () => {
//
//
//     return <StoreContext.Consumer>
//         {store => {
//             const state = store.getState();
//             const posts = state.profile.postsData;
//             const newPostText = state.profile.newPostText;
//
//             const onAddPost = (newPostText: string) => {
//                 const action = addPostAC(newPostText);
//                 store.dispatch(action);
//             }
//             const onPostChange = (newText: string) => {
//                 const action = updatePostNewTextAC(newText);
//                 store.dispatch(action);
//             }
//             return <MyPosts posts={posts}
//                             newPostText={newPostText}
//                             addNewPost={onAddPost}
//                             updateNewPostText={onPostChange}
//             />
//         }}
//
//     </StoreContext.Consumer>
//
// };


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