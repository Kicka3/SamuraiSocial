import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";
import React from "react";
import {postsDataType} from "../../../index";


type MyPostsPropsType = {
    postsData: postsDataType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

   return (
      <div className="feed">
         <div className="feedWrapper">
            <Share/>
            <MyPost postsData={props.postsData}/>
         </div>
      </div>
   );
}
