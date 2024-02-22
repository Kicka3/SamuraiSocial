import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
                        {/*<div className="shareOption">*/}
                        {/*   /!*ИКОНКА*!/*/}
                        {/*   /!*<LabelImportantIcon htmlColor="#1E90FF" className="shareIcon"/>*!/*/}
                        {/*   <span className="shareOptionText">Tag</span>*/}
                        {/*</div>*/}
                        {/*<div className="shareOption">*/}
                        {/*   /!*ИКОНКА*!/*/}
                        {/*   /!*<LocationOnIcon htmlColor="#7B68EE" className="shareIcon"/>*!/*/}
                        {/*   <span className="shareOptionText">Location</span>*/}
                        {/*</div>*/}
                        {/*<div className="shareOption">*/}
                        {/*   /!*ИКОНКА*!/*/}
                        {/*   /!*<EmojiEmotionsIcon htmlColor="#1E90FF" className="shareIcon"/>*!/*/}
                        {/*   <span className="shareOptionText">Feelings</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <button className="shareBtn">Share</button>

            </form>
        </>
    );
};

export const ShareReduxInputTextForm = reduxForm<ShareInputFormDataType>({
    form: 'shareNewPostText'
})(ShareInputForm);