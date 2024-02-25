import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControl/Textarea";
import {maxLengthСreator, minLength, required} from "../../../utils/validators/Valodators";


export type FormDialogsDataType = {
    newMessageBody: FormDialogsDataType
}

const maxLength45 = maxLengthСreator(45);

export const AddMessageForm: React.FC<InjectedFormProps<FormDialogsDataType>> = (props) => {

    return (
        <form className="chatMessagesBottom" onSubmit={props.handleSubmit}>

            <Field className="chatMessageInput"
                   placeholder={"Say hello!"}
                   component={Textarea}
                   validate={[required, maxLength45, minLength]}
                   name={'newMessageBody'}
                   type={'text'}
                   required
            />

            <button className="chatSubmitBtn">Send</button>
        </form>
    );
};

export const AddMessageReduxForm = reduxForm<FormDialogsDataType>({
    form: 'dialogsAddMessageForm'
})(AddMessageForm);





