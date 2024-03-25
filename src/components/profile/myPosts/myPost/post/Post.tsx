import "./post.css"
import React from "react";
import {store} from "../../../../../redux/redux-store";
import {getProfileAvatars} from "../../../../../redux/users-selectors/users-selectors";
import noAvatar from "../../../../../assets/images/avatars/noAvatar.jpeg";


type PostPropsType = {
    titlePost: string
    likesCount: number
    userAvatars: string | null | undefined
}

const Post: React.FC<PostPropsType> = (props) => {
    const {titlePost, likesCount,userAvatars, ...restProps} = props;

    const smallPhoto = userAvatars ? userAvatars: noAvatar;

    return (
        <div className="post">
            <div>
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg"
                                 src={smallPhoto}
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
                        {/*//Фото поста*/}
                        {/*<img className="postImg" src={smallPhoto} alt="postThree"/>*/}
                        <img className="postImg" src={'https://a.d-cd.net/acc6855s-1920.jpg'} alt="postThree"/>
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
