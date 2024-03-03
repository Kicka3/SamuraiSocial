import React from "react";
import "../formsControl/formsControl.css";


export type FormsControlType = {
    input: {}
    meta: {
        touched: boolean,
        error: string,
    }
}

export const Textarea: React.FC<FormsControlType> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={'formControl' + ' ' + (hasError ? 'error' : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

