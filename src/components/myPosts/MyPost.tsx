import "./myPost.css"
import Post from "./post/Post";

const MyPost = () => {

   return (
      <>
         <Post titlePost={"Jopa"}
               likesCount={5}
         />
         <Post titlePost={"My little jopa"}
               likesCount={25}
         />
      </>
   )
};

export default MyPost;
