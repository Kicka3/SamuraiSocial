import React from "react";
import "../formsControl/formsControl.css";


export type FormsControlType = {
    inputClassName?: string
    input: {}
    meta: {
        touched: boolean,
        error: string,
    }
}

export const FormControlTextarea: React.FC<FormsControlType> = ({input, meta: {touched, error}, ...props}) => {
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

