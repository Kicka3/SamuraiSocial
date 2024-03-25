import "./post.css"
import React, {useState} from "react";
import {SmileOutlined} from '@ant-design/icons';
import noAvatar from "../../../../../assets/images/avatars/noAvatar.jpeg";
import like from "../../../../../assets/images/things/like.png"
import heart from "../../../../../assets/images/things/heart.png"


type PostPropsType = {
    titlePost: string
    likesCounter: number
    userAvatars: string | null | undefined
    userName: string | null | undefined
    postId: string
    setCountLikes: (postId: string) => void
}

const Post: React.FC<PostPropsType> = (props) => {
    const {
        titlePost,
        likesCounter,
        userAvatars,
        userName,
        postId,
        setCountLikes,
        ...restProps
    } = props;
    const [isLiked, setIsLiked] = useState(false);

    const smallPhoto = userAvatars ? userAvatars : noAvatar;

    const likeHandler = (postId: string) => {
        if (!isLiked) {
            setCountLikes(postId);
            setIsLiked(true);
        }
    }

    return (
        <div className="post">
            <div>
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg"
                                 src={smallPhoto}
                                 alt="ProfilePucture"/>
                            <span className="postUserName">{userName}</span>
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
                            <img className="likeIcon" src={like} alt="heartImg"
                                 onClick={() => likeHandler(props.postId)}/>
                            <img className="likeIcon" src={heart} alt="LikeImg"/>
                            <span className="postLikeCounter">{likesCounter} people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <SmileOutlined style={{marginRight: "10px"}}/>
                            <span className="postCommentText">comments</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Post;
