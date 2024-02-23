import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import "../share.css"


export type ShareInputFormDataType = {
    shareNewPostText: string
    shareFilesPost: Blob
}

const ShareInputForm: React.FC<InjectedFormProps<ShareInputFormDataType>> = (props) => {

    return (<>

            <form onSubmit={props.handleSubmit}>
                <div className="shareTop">
                    <Field className="shareInput"
                           name={'shareNewPostText'}
                           component={'input'}
                           placeholder={"What's in your mind ?"}
                           type={'text'}
                    />
                </div>

            </form>
        </>
    );
};

export const ShareReduxInputTextForm = reduxForm<ShareInputFormDataType>({
    form: 'shareNewPostText'
})(ShareInputForm);