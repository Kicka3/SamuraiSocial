import "./feed.css"
import MyPost from "../myPosts/MyPost";
import Share from "./share/Share";

export default function Feed() {

   return (
      <div className="feed">
         <div className="feedWrapper">
            <Share/>
            <MyPost/>
         </div>
      </div>
   );
}
