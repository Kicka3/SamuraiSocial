import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {PostsType} from "../../../redux/profile-reducer/profile-reducer";


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addNewPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
    // dispatch: (action: MainReducerType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, newPostText, addNewPost, updateNewPostText} = props;


    return (
        <section className="feed">
            <div className="feedWrapper">
                <Share addNewPost={addNewPost}
                       newPostText={newPostText}
                       updateNewPostText={updateNewPostText}
                />
                <MyPost posts={posts}

                />
            </div>
        </section>
    );
};
