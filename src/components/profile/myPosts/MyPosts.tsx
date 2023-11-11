import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {PostsDataType} from "../../redux/state";


type MyPostsPropsType = {
    posts: PostsDataType
    addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
const {posts} = props
   return (
      <div className="feed">
         <div className="feedWrapper">
            <Share addPost={props.addPost}/>
            <MyPost posts={props.posts}

            />
         </div>
      </div>
   );
}
