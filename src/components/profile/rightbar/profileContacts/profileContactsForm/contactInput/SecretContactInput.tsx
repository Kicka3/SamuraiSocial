import React from "react";
import "./contactInput.css";


export type SecretContactInputType = {
    inputClassName?: string
    input: {}
    meta: {
        touched: boolean,
        error: string,
    }
}
export const SecretContactInput: React.FC<SecretContactInputType> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    const inputId = hasError ? 'contactFormsInput' : 'contact-form-content';

    return (
        <div>
            <div className={'formContactInputWrapper'}>
                <input className={'contactInput'} id={inputId} {...input} {...props}/>
            </div>
            {hasError && <span className={'ContactInputErrorMessage'}>{error}</span>}
        </div>
    );
}