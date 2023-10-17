import './dialogs.css'
import React from 'react';
import AvatarForConversation from '../../public/assets/person/person0.jpeg'

export const Dialogs = () => {
    return (
        <div className={"conversation"}>
                <img className={"conversationImg"}
                     src={AvatarForConversation}
                     alt={"imgConvr"}/>
            <span className={"conversationName"}>John Doe</span>
        </div>
    );
};
