import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {PostsPropsType} from "./MyPostsContainer";


// type MyPostsPropsType = {
//     posts: PostsType[]
//     newPostText: string
//     addNewPost: (newPostText: string) => void
//     updateNewPostText: (newText: string) => void
// }

export const MyPosts = (props: PostsPropsType) => {
    // const {posts, addNewPost, updateNewPostText} = props;


    return (
        <section className="feed">
            <div className="feedWrapper">
                <Share addNewPost={props.addNewPost}
                       newPostText={props.posts.newPostText}
                       updateNewPostText={props.updateNewPostText}
                />
                <MyPost posts={props.posts.postsData}

                />
            </div>
        </section>
    );
};
