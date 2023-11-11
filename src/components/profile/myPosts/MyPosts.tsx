import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import Share from "./share/Share";

export default function MyPosts() {

   return (
      <div className="feed">
         <div className="feedWrapper">
            <Share/>
            <MyPost/>
         </div>
      </div>
   );
}
