import "./myPost.css"
import Post from "./post/Post";
import {PostsDataType} from "../../../redux/state";


type MyPostPropsType = {
    posts: PostsDataType
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
