import React from "react";
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    updatePostNewTextAC
} from "../../../redux/profile-reducer/profile-reducer";
import StoreContext from "../../../store-context/StoreContext";


type MyPostsPropsType = {
    // store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = () => {
    // const {store} = props;

    return <StoreContext.Consumer>
        {store => {
            const state = store.getState();
            const posts = state.profile.postsData;
            const newPostText = state.profile.newPostText;

            const onAddPost = (newPostText: string) => {
                const action = addPostAC(newPostText);
                store.dispatch(action);
            }
            const onPostChange = (newText: string) => {
                const action = updatePostNewTextAC(newText);
                store.dispatch(action);
            }
            return <MyPosts posts={posts}
                            newPostText={newPostText}
                            addNewPost={onAddPost}
                            updateNewPostText={onPostChange}
            />
        }}

    </StoreContext.Consumer>

};
