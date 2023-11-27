import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {MainReducerType, PostsDataType} from "../../../redux/old-store-for-my-redux/my-old-store";



type MyPostsPropsType = {
    posts: PostsDataType
    newPostText: string
    dispatch: (action: MainReducerType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
const {posts, dispatch, newPostText} = props;


   return (
      <section className="feed">
         <div className="feedWrapper">
            <Share dispatch={dispatch}
                   newPostText={newPostText}
                   // updatePostNewText={updatePostNewText}
            />
            <MyPost posts={posts}

            />
         </div>
      </section>
   );
};
