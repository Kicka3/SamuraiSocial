import '../message/message.css'
import React from 'react';
import PersonAvatar0 from '../../../public/assets/person/person0.jpeg'


type MessagePropsType = {
    ownMessage?: boolean
    message: string
    id?: number
}
export const Message: React.FC<MessagePropsType> = (props) => {
    const {id, ownMessage, message} = props
    return (
        // У него есть активный класс onwMessage
        // <div className={ownMessage ? "message onwMessage" : "message"}>
        <div className={ownMessage ? "message ownMessage" : "message"}>
            <div className="messageTop">
                <img className="messageImg"
                     src={PersonAvatar0}
                     alt={"persAvatar"}/>
                <p className="messageText">{message}</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    );
};

