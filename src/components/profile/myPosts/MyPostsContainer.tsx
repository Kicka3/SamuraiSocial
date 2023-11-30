import React from "react";
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    MainProfileReducerType,
    PostsType,
    updatePostNewTextAC
} from "../../../redux/profile-reducer/profile-reducer";



type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: MainProfileReducerType) => void
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const {posts, newPostText, dispatch} = props;

    const dispatchAddPost = (newPostText: string) => {
        dispatch(addPostAC(newPostText));
    }
    const dispatchUpdatePost = (newText: string) => {
        dispatch(updatePostNewTextAC(newText));
    }
    return (
        <MyPosts posts={posts}
                 newPostText={newPostText}
                 addNewPost={dispatchAddPost}
                 updateNewPostText={dispatchUpdatePost}
        />
    );
};
