import './dialogItem.css'
import React from 'react';
import AvatarForChatOnline from "../../../public/assets/person/person0.jpeg";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const {name, id} = props


    let path = '/dialogs/' + id
    return (
        <>
            <div className={`${"conversation"} ${'conversationActive'}`}>
                <div className="chatOnlineFriend">
                    <div className="chatOnlineImgContainer">
                        <img className="chatOnlineImg"
                             src={AvatarForChatOnline}
                             alt={"avatarUsersInChat"}/>
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <NavLink to={path} className="chatOnlineUserName">{name}</NavLink>
                </div>
            </div>
        </>
    );
};

