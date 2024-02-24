import "./share.css"
import React from "react";
import {AddNewPostFormType, AddNewPostReduxForm} from "../share/addNewPostForm/AddNewPostForm";

type SharePropsType = {
    addNewPost: (newPostText: AddNewPostFormType) => void
}

const Share: React.FC<SharePropsType> = (props) => {
    const {addNewPost} = props;


    const onAddPost = (newPostText: AddNewPostFormType) => {
        addNewPost(newPostText)
    }

    return (<>
            <div className="addPostForm">
                <AddNewPostReduxForm onSubmit={onAddPost}/>

                {/*<form  className="shareWrapper"*/}
                {/*       onSubmit={props.handleSubmit}*/}
                {/*       onSubmit={onAddPost}*/}
                {/*>*/}
                {/*    <div className="shareTop">*/}

                {/*//AВАТАРКА USERA*/}
                {/*       <img className="shareProfileImg"*/}
                {/*            src={'assets/person/person0.jpeg'}*/}
                {/*            alt="User's Avatar"/>*/}

                {/*       <ShareReduxInputTextForm />*/}

                {/*     </div>*/}
                {/*    <hr className="sharHr"/>*/}

                {/*   <ShareReduxForm/>*/}
                {/* </form>*/}
            </div>
        </>
    );
}

export default Share;