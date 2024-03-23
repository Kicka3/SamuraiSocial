import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {
    maxLength,
    minLength,
    required
} from '../../../../../utils/validators/Valodators';
import {FormControlTextarea} from "../../../../common/formsControl/FormControlTextarea";


export type AddNewPostFormType = {
    newPostText: string
}

const maxLength20 = maxLength(20);

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    const {handleSubmit} = props;

    return (
        <form className="shareWrapper"
              onSubmit={handleSubmit}
        >
            <div className="shareTop">
                {/*//AВАТАРКА USERA*/}
                <img className="shareProfileImg"
                     src={'assets/person/person0.jpeg'}
                     alt="User's Avatar"/>

                {/*<ShareReduxInputTextForm />*/}
                <div className={'shareContainer'}>
                    <div className="shareTop">
                        <Field className="shareInput"
                               name={'newPostText'}
                               component={FormControlTextarea}
                               placeholder={"What's in your mind ?"}
                               type={'text'}
                               validate={[required, maxLength20, minLength]}
                        />
                    </div>

                </div>
            </div>

            <hr className="sharHr"/>
            {/*<ShareReduxForm/>*/}

            <div className="shareBottom">
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        {/*ИКОНКА*/}
                        {/*<PermMediaIcon htmlColor="#7B68EE" className="shareIcon"/>*/}

                        <span className="shareOptionText">Photo / Video</span>

                        <Field style={{display: "none"}}
                               type="file" id="file"
                               accept=".png,.jpeg,.jpg"
                               name={'shareTextPost'}
                               component={'input'}
                        />

                    </label>
                </div>
                <button className="shareBtn">Share</button>
            </div>
        </form>
    );
};

export const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({
    form: 'newPostText'
})(AddNewPostForm);