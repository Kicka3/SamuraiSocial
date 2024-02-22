import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type ShareInputFormDataType = {
    shareNewPostText: string
}

export const ShareInputForm: React.FC<InjectedFormProps<ShareInputFormDataType>> = () => {

    return (
        <form>
            <Field name={'shareNewPostText'}
                   component={'input'}
                   className="shareInput"
                   placeholder={"What's in your mind ?"}
                   ref={newPostElement}
                   value={newPostText}
                   onChange={onPostChange}
            />
        </form>
    );
};

export const ShareReduxInputForm = reduxForm<ShareInputFormDataType>({

})(ShareInputForm);