import './dialogsItem.css'
import React from 'react';
import AvatarForChatOnline from "../../../public/assets/person/person0.jpeg";

export const DialogsItem = () => {
    return (
        <>
            <div className={"conversation"}>
                <div className="chatOnlineFriend">
                    <div className="chatOnlineImgContainer">
                        <img className="chatOnlineImg"
                             src={AvatarForChatOnline}
                             alt={"avatarUsersInChat"}/>
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineUserName">John Doe</span>
                </div>
            </div>


            {/*<div className={"conversation"}>*/}
            {/*    <img className={"conversationImg"}*/}
            {/*         src={AvatarForConversation}*/}
            {/*         alt={"imgConvr"}/>*/}
            {/*    <span className={"conversationName"}>John Doe</span>*/}
            {/*</div>*/}

        </>
    );
};

