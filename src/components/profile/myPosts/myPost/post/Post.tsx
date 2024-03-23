import "./post.css"
import React from "react";


type PostPropsType = {
    titlePost: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    const {titlePost, likesCount, ...restProps} = props;

    return (
        <div className="post">
            <div>
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg"
                                 src={'assets/person/person0.jpeg'}
                                 alt="ProfilePucture"/>
                            <span className="postUserName">Name of user</span>
                        </div>

                        {/*ФУНКЦИЯ ПОСТА 3 ТОЧКИ */}
                        {/*<div className="postTopRight">*/}
                        {/*   /!*<MoreVertIcon className=""/>*!/*/}
                        {/*</div>*/}

                    </div>
                    <div className="postCenter">
                        <span className="postText">{titlePost}</span>
                        <img className="postImg" src={"/assets/posts/post2.jpeg"} alt="postThree"/>
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src={"assets/heart.png"} alt="heartImg"/>
                            <img className="likeIcon" src={"assets/like.png"} alt="LikeImg"/>
                            <span className="postLikeCounter">{likesCount} people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">comments</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Post;
