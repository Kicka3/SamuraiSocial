import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDialogsDataType = {
    newMessageBody: FormDialogsDataType
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDialogsDataType>> = (props) => {

    return (
        <form className="chatMessagesBottom" onSubmit={props.handleSubmit}>

            <Field className="chatMessageInput"
                   placeholder={"Say hello!"}
                   component={'textarea'}
                   name={'newMessageBody'}
                   type={'text'}
                   required
            ></Field>

            <button className="chatSubmitBtn">Send</button>
        </form>
    );
};

export const AddMessageReduxForm = reduxForm<FormDialogsDataType>({
    form: 'dialogsAddMessageForm'
})(AddMessageForm);





