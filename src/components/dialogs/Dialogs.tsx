import React from 'react';
import './dialogs.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {MessagesPage} from "../../redux/state";


type DialogsPropsType = {
    state: MessagesPage
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogsData.map(dialog => <DialogItem key={dialog.id}
                                                                              name={dialog.name}
                                                                              id={dialog.id}
    />)

    const messageElements = props.state.messagesData.map(message => <Message key={message.id}
                                                                             message={message.message}
                                                                             id={message.id}
                                                                             ownMessage={message.ownMessage}
    />)

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

