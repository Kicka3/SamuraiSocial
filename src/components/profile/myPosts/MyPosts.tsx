import "./myPosts.css"
import MyPost from "./myPost/MyPost";
import React from "react";
import {PostsPropsType} from "./MyPostsContainer";
import Share from "./share/Share";


export class MyPosts extends React.Component<PostsPropsType> {

    shouldComponentUpdate(nextProps: Readonly<PostsPropsType>, nextState: Readonly<{}>,): boolean {
        return nextProps != this.props || nextState != this.state
    }

    render() {
        console.log('RENDER YO')

        const {addNewPost} = this.props;

        return (
            <section className="feed">
                <div className="feedWrapper">

                    <Share
                        addNewPost={addNewPost}
                    />

                    <MyPost posts={this.props.posts.postsData}

                    />
                </div>
            </section>
        );
    }
}
