import "./share.css"
import React from "react";
import {AddNewPostFormType, AddNewPostReduxForm} from "../share/addNewPostForm/AddNewPostForm";
import {store} from "../../../../redux/redux-store";

type SharePropsType = {
    addNewPost: (newPostText: AddNewPostFormType) => void
}

const Share: React.FC<SharePropsType> = (props) => {
    const {addNewPost} = props;

    const userStore = store.getState().auth.avatarCurrenUser.small

    console.log("SHARE")
    console.log(userStore)

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
