import {ProfileResponseType} from "../../../../../redux/profile-reducer/profile-reducer";
import React, {useMemo} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../../../utils/validators/Valodators";
import {SecretContactInput} from "../profileContactsForm/contactInput/SecretContactInput";
import "./profileContactsForm.css"


//НАДО ЛИ MIXED TYPE?
type CombinedProfileFormType = ProfileContactsFormDataType & ProfileContactsFormMixedType;

type ProfileContactsFormMixedType = {
    initialValues: ProfileResponseType | null
    saveProfileInfo: (formData: ProfileContactsFormDataType) => void
}
export type ProfileContactsFormDataType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    AboutMe: string

    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}


const ProfileContactsForm: React.FC<InjectedFormProps<CombinedProfileFormType>> = ({handleSubmit}) => {

    const validate = useMemo(() => [required, maxLength(50), minLength(4)], [required]);

    return (<form onSubmit={handleSubmit}>
            <div className="input-contact-boxes">

                <div className="contact-input-box">
                    <b className={"contact-item"}>AboutMe:</b>
                    <Field
                        type="text"
                        name={'AboutMe'}
                        placeholder="Enter your AboutMe"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My lookingForAJob:</b>
                    <Field
                        type="checkbox"
                        name={'lookingForAJob'}
                        placeholder="Enter your lookingForAJob"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My lookingForAJobDescription:</b>
                    <Field
                        type="text"
                        name={'lookingForAJobDescription'}
                        placeholder="Enter your desc"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My full name:</b>
                    <Field
                        type="text"
                        name={'fullName'}
                        placeholder="Enter your name"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>



                {/*//==============================================================//*/}

                <div className="contact-input-box">
                    <b className={"contact-item"}>My facebook:</b>
                    <Field
                        type="text"
                        name={'facebook'}
                        placeholder="Enter your facebook"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My website:</b>
                    <Field
                        type="text"
                        name={'website'}
                        placeholder="Enter your website"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My vk:</b>
                    <Field
                        type="text"
                        name={'vk'}
                        placeholder="Enter your vk link"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My twitter:</b>
                    <Field
                        type="text"
                        name={'twitter'}
                        placeholder="Enter your twitter"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>

                <div className="contact-input-box">
                    <b className={"contact-item"}>My instagram:</b>
                    <Field
                        type="text"
                        name={'instagram'}
                        placeholder="Enter your instagram"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>
                <div className="contact-input-box">
                    <b className={"contact-item"}>My youtube:</b>
                    <Field
                        type="text"
                        name={'youtube'}
                        placeholder="Enter your youtube"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>
                <div className="contact-input-box">
                    <b className={"contact-item"}>My github:</b>
                    <Field
                        type="text"
                        name={'github'}
                        placeholder="Enter your github"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>
                <div className="contact-input-box">
                    <b className={"contact-item"}>My mainLink:</b>
                    <Field
                        type="text"
                        name={'mainLink'}
                        placeholder="Enter your mainLink"
                        required
                        validate={validate}
                        component={SecretContactInput}
                    />
                </div>
                <button className={"save-form-contact"}>Save</button>
            </div>
        </form>
    );
}


export const ProfileContactsReduxForm = reduxForm<CombinedProfileFormType>({
    form: 'contacts'
})(ProfileContactsForm)
