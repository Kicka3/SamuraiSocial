import React from 'react';
import './chatMenu.css'
import {DialogsItem} from "../dialogsItem/DialogsItem";

export const ChatMenu = () => {
    return (
        <div className="chatMenu">
            <div className="dialogsFriends">Your dialogues:</div>
            <div className="chatMenuWrapper">
                <input className={"chatMenuInput"}
                       type="text"
                       placeholder={"Search for friends"}/>
                <DialogsItem/>
                <DialogsItem/>
            </div>
        </div>
    );
};

