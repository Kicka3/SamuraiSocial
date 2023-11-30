import "./myPost.css"
import Post from "./post/Post";
import {PostsType} from "../../../../redux/profile-reducer/profile-reducer";


type MyPostPropsType = {
    posts: PostsType[]
}

const MyPost = (props: MyPostPropsType) => {

    const postsElements = props.posts.map(posts => <Post key={posts.id}
                                                         titlePost={posts.message}
                                                         likesCount={posts.likesCount}
    />)

    return (
        <>
            {postsElements}
        </>
    )
};

export default MyPost;
