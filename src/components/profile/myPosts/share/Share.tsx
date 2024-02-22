import "./share.css"
import React from "react";
import {ShareReduxForm} from "../../../../../src/components/profile/myPosts/share/shareForm/ShareForm";
import {ShareReduxInputTextForm} from "../../../../../src/components/profile/myPosts/share/shareForm/ShareInputForm";

type SharePropsType = {
    newPostText: string
    addNewPost: (newPostText: string) => void
    // updateNewPostText: (newText: string) => void
}

const Share: React.FC<SharePropsType> = (props) => {
    const {addNewPost, newPostText} = props

    // let newPostElement = React.createRef<HTMLInputElement>();

    const onAddPost = () => {
        // addNewPost()

    }

    // const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newText = e.currentTarget.value;
    //     updateNewPostText(newText)
    // }

    return (<>
         <div className="share">
             <div className="shareWrapper">
                 <div className="shareTop">

                    {/*//AВАТАРКА USERA*/}
                    <img className="shareProfileImg"
                         src={'assets/person/person0.jpeg'}
                         alt="User's Avatar"/>

                    <ShareReduxInputTextForm onSubmit={onAddPost}/>

                 </div>
                <hr className="sharHr"/>

                {/*<ShareReduxForm onSubmit={onAddPost}/>*/}

              </div>
          </div>


        </>
    );
}

export default Share;