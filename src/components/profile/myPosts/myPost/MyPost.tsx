import "./myPost.css"
import Post from "./post/Post";
import {PostsType} from "../../../../redux/profile-reducer/profile-reducer";


type MyPostPropsType = {
    posts: PostsType[]
    userAvatars: string | null | undefined
}

const MyPost = (props: MyPostPropsType) => {
    const {userAvatars} = props

    const postsElements = props.posts.map(posts => <Post key={posts.id}
                                                         titlePost={posts.message}
                                                         likesCount={posts.likesCount}
                                                         userAvatars={userAvatars}
    />)

    return (
        <>
            {postsElements}
        </>
    )
};

export default MyPost;
