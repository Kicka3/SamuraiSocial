import React from 'react';
import './dialogs.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import '../messanger/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import AvatarForChatOnline from "../../public/assets/person/person0.jpeg";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Diana'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Evgeny'},
        {id: 5, name: 'Pank'},
    ]

    let messagesData = [
        {id: 1, ownMessage: false, message: 'Hello this is a message!'},
        {id: 2, ownMessage: true, message: 'Hello this is a message from own!!'},
        {id: 3, ownMessage: false, message: 'Hello this is a message!'},
        {id: 4, ownMessage: true, message: 'Hello this is a message from own!!'},
        {id: 5, ownMessage: false, message: 'Hello this is a message!'},
        {id: 6, ownMessage: true, message: 'Hello this is a message from own!!!'},
        {id: 7, ownMessage: false, message: 'Hello this is a message!'},
        {id: 8, ownMessage: true, message: 'Hello this is a message from own!!!'},
    ]


    const dialogsElements = dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    const messageElements = messagesData.map(message => <Message key={message.id} message={message.message} id={message.id}
                                                                 ownMessage={message.ownMessage}/>)

    return (
        <>
            <div className={"messenger"}>
                <div className="messages">
                    <div className="messagesWrapper">
                        <div className="messagesTop">
                            {messageElements}
                        </div>
                        <div className="chatMessagesBottom">
                                <textarea className="chatMessageInput"
                                          placeholder={"Say hello!"}
                                ></textarea>
                            <button className="chatSubmitBtn">Send</button>
                        </div>
                    </div>
                </div>

                {/*//Люди справа*/}
                <div className={"dialogs"}>
                    <div className="chatOnlineWrapper">
                        <div className="chatMenu">
                            <div className="chatMenuWrapper">

                                {/*//ChatMenu из компоненты CHATMENU*/}
                                <div className="chatMenu">
                                    <div className="dialogsFriends">Your dialogues:</div>
                                    <div className="chatMenuWrapper">
                                        <input className={"chatMenuInput"}
                                               type="text"
                                               placeholder={"Search for friends"}/>
                                    </div>
                                </div>
                                {dialogsElements}
                            </div>
                        </div>

                        {/*<ChatMenu/>*/}
                        <ChatOnline/>
                    </div>

                </div>
            </div>
        </>
    );
};

