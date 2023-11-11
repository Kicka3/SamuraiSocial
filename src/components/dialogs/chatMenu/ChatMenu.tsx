import React from 'react';
import './chatMenu.css'
import {DialogItem} from "../dialogItem/DialogItem";

export const ChatMenu = () => {
    return (
        <div className="chatMenu">
            <div className="dialogsFriends">Your dialogues:</div>
            <div className="chatMenuWrapper">
                <input className={"chatMenuInput"}
                       type="text"
                       placeholder={"Search for friends"}/>
            </div>
        </div>
    );
};

