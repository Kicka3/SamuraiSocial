import "./post.css"

const Post = () => {

   return (
      <div className="post">
         <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                  {/*<Link to={}>*/}
                  <img className="postProfileImg"
                       src={'assets/person/person0.jpeg'}
                       alt="ProfilePucture"/>
                  {/*</Link>*/}
                  <span className="postUserName">User name post</span>
                  {/*<span className="postDate">POST DATA</span>*/}
               </div>

               {/*ФУНКЦИЯ ПОСТА 3 ТОЧКИ */}
               {/*<div className="postTopRight">*/}
               {/*   /!*<MoreVertIcon className=""/>*!/*/}
               {/*</div>*/}

            </div>
            <div className="postCenter">
               <span className="postText">Post 1</span>
               <img className="postImg" src={"assets/posts/post2.jpeg"} alt="postThree"/>
            </div>
            <div className="postBottom">
               <div className="postBottomLeft">
                  <img className="likeIcon" src={"assets/heart.png"} alt="heartImg"/>
                  <img className="likeIcon" src={"assets/like.png"} alt="LikeImg"/>
                  <span className="postLikeCounter">people like it</span>
               </div>
               <div className="postBottomRight">
                  <span className="postCommentText">comments</span>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Post;
