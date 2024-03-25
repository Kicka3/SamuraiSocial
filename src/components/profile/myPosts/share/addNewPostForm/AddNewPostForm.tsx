import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {
    maxLength,
    minLength,
    required
} from '../../../../../utils/validators/Valodators';
import {FormControlTextarea} from "../../../../common/formsControl/FormControlTextarea";
import {getUsrAvatar} from "../../../../../utils/fucntions/getAvatars";
import noUserAvatar from "../../../../../assets/images/avatars/noAvatar.jpeg";
import {UpCircleOutlined, ToTopOutlined} from '@ant-design/icons';


export type AddNewPostFormType = {
    newPostText: string
}

const maxLength20 = maxLength(20);
const minLength3 = minLength(3);
const avatar = getUsrAvatar('small')
console.log(avatar)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    const {handleSubmit} = props;

    return (
        <form className={"shareWrapper"} onSubmit={handleSubmit}>
            <div className={"shareTop"}>

                <img className={"shareProfileImg"}
                     src={avatar ? avatar : noUserAvatar}
                     alt="User's Avatar"/>

                <div className={'shareContainer'}>
                    <div className={"shareTop"}>
                        <Field className={"shareInput"}
                               name={'newPostText'}
                               component={FormControlTextarea}
                               placeholder={"What's in your mind ?"}
                               type={'text'}
                               validate={[required, maxLength20, minLength3]}
                        />
                    </div>

                </div>
            </div>

            <hr className="sharHr"/>

            <div className="shareBottom">
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        {/*ИКОНКА*/}

                        <div className="shareIcon">
                            <ToTopOutlined/>
                        </div>
                        <span className="shareOptionText">Photo / Video</span>

                        <Field style={{display: "none"}}
                               type="file" id="file"
                               accept=".png,.jpeg,.jpg"
                               name={'shareTextPost'}
                               component={'input'}
                        />

                    </label>
                </div>
                <button className={"shareBtn"} >Share <UpCircleOutlined /> </button>
            </div>
        </form>
    );
};

export const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({
    form: 'newPostText'
})(AddNewPostForm);
