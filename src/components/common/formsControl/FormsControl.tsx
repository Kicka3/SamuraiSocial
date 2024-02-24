import React from "react";
import "../formsControl/Textarea.css"


export const Textarea: React.FC = (props) => {
    return (
        <div>
            <textarea {...props}/>
        </div>
    )
}