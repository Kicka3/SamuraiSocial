import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import React from "react";
import {PostsPropsType} from "./MyPostsContainer";
import Share from "./share/Share";


export const MyPosts: React.FC<PostsPropsType> = React.memo((props) => {
    const {addNewPost, userAvatars} = props;

    return (
        <section className="feed">
            <div className="feedWrapper">
                <Share addNewPost={addNewPost} />
                <MyPost posts={props.posts.postsData} userAvatars={userAvatars}/>
            </div>
        </section>
    );
});
