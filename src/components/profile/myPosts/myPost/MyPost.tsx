import "./myPost.css"
import Post from "./post/Post";
import {postsDataType} from "../../../../index";


type MyPostPropsType = {
    postsData: postsDataType[]
}

const MyPost = (props: MyPostPropsType) => {

    const postsElements = props.postsData.map(posts => <Post key={posts.id}
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
