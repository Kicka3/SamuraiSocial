import "./feed.css"
import Post from "../posts/Post";
import Share from "../share/Share";


// import {useContext, useEffect, useState} from "react";
// import axios from "axios";


export default function Feed() {

   return (
      <div className="feed">
         <div className="feedWrapper">
            <Share/>
            <Post/>
         </div>
      </div>
   );
}
