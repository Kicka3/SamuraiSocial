import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {PostsDataType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: PostsDataType
    newPostText: string
    addPost: () => void
    updatePostNewText: (newPostText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
const {posts, addPost, newPostText, updatePostNewText} = props;


   return (
      <section className="feed">
         <div className="feedWrapper">
            <Share addPost={addPost}
                   newPostText={newPostText}
                   updatePostNewText={updatePostNewText}
            />
            <MyPost posts={posts}

            />
         </div>
      </section>
   );
};
