import React from 'react';
import {Dialogs} from "../dialogs/Dialogs";
import './chatMenu.css'

export const ChatMenu = () => {
    return (
        <div className="chatMenu">
            <div className="dialogsFriends">Your dialogues:</div>
            <div className="chatMenuWrapper">
                <input className={"chatMenuInput"}
                       type="text"
                       placeholder={"Search for friends"}/>
                <Dialogs/>
                <Dialogs/>
                <Dialogs/>
                <Dialogs/>
                <Dialogs/>
            </div>
        </div>
    );
};

