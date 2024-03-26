import React from 'react';
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {FormControlTextarea} from "../../common/formsControl/FormControlTextarea";
import {minLength, required} from "../../../utils/validators/Valodators";
import {PlusOutlined} from "@ant-design/icons";


export type FormDialogsDataType = {
    newMessageBody: FormDialogsDataType
}

const minLength1 = minLength(1);

export const AddMessageForm: React.FC<InjectedFormProps<FormDialogsDataType>> = (props) => {

    return (
        <form className="chatMessagesBottom" onSubmit={props.handleSubmit} >

            <Field className="chatMessageInput"
                   placeholder={"Say hello!"}
                   component={FormControlTextarea}
                   validate={[required, minLength1]}
                   name={'newMessageBody'}
                   type={'text'}
                   required
            />
            {/*<button className="chatSubmitBtn" >Send</button>*/}
            <button className={"chatSubmitBtn"}>Send <PlusOutlined /> </button>
        </form>
    );
};

export const AddMessageReduxForm = reduxForm<FormDialogsDataType>({
    form: 'dialogsAddMessageForm'
})(AddMessageForm);

// onClick={reset} Не срабатывает как надо (раньше)




