import "./myPost.css"
import Post from "./post/Post";

const MyPost = () => {

    let postsData = [
        {id: 1, message: "Jopa", likesCount: 5},
        {id: 2, message: "My little jopa", likesCount: 25},
    ]

    const postsElements = postsData.map(posts => <Post key={posts.id}
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
