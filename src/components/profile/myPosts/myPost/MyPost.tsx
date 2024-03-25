import "./myPost.css"
import Post from "./post/Post";
import {PostsType} from "../../../../redux/profile-reducer/profile-reducer";


type MyPostPropsType = {
    posts: PostsType[]
    userAvatars: string | null | undefined
    userName: string | null | undefined
    setCountLikes: (postId: string) => void
}

const MyPost = (props: MyPostPropsType) => {
    const {
        userAvatars,
        userName,
        setCountLikes,
    } = props

    const postsElements = props.posts.map(posts => <Post key={posts.id}
                                                         titlePost={posts.message}
                                                         likesCounter={posts.likesCount}
                                                         userAvatars={userAvatars}
                                                         userName={userName}
                                                         postId={posts.id}
                                                         setCountLikes={setCountLikes}

    />)

    return (
        <>
            {postsElements}
        </>
    )
};

export default MyPost;
