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

    const onAddPost = () => {
        // addNewPost(newPostText)
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

                <ShareReduxForm/>

              </div>
          </div>

        </>
    );
}

export default Share;