import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {PostsPropsType} from "./MyPostsContainer";


export const MyPosts: React.FC<PostsPropsType> = (props) => {
    const {addNewPost} = props;

    return (
        <section className="feed">
            <div className="feedWrapper">
                <Share addNewPost={addNewPost}
                       newPostText={props.posts.newPostText}
                       // updateNewPostText={updateNewPostText}
                />

                <MyPost posts={props.posts.postsData}

                />
            </div>
        </section>
    );
};
