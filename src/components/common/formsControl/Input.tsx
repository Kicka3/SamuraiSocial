import React from "react";
import "../formsControl/formsControl.css";
import {FormsControlType} from "../formsControl/Textarea";


export const Input: React.FC<FormsControlType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const inputId = hasError ? 'formsInput' : 'form-content';



    return (
        <div>
            <div className={'formInputWrapper'}>
                <input id={inputId} {...input} {...props}/>
            </div>
            {hasError && <span className={'inputErrorMessage'}>{meta.error}</span>}
        </div>
    );
}