import "./share.css"
import React from "react";
import {AddNewPostFormType, AddNewPostReduxForm} from "../share/addNewPostForm/AddNewPostForm";

type SharePropsType = {
    addNewPost: (newPostText: AddNewPostFormType) => void
}

const Share: React.FC<SharePropsType> = (props) => {
    const {addNewPost} = props;


    const onAddPost = (newPostText: AddNewPostFormType) => {
        addNewPost(newPostText);
    }

    return (<>
            <div className="addPostForm">
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
        </>
    );
}

export default Share;