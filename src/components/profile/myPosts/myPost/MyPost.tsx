import "./myPost.css"
import Post from "./post/Post";
import {PostsDataType} from "../../../../redux/old-store-for-my-redux/my-old-store";


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
