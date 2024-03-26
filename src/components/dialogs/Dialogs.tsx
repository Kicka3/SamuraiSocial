import React from 'react';
import './dialogs.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {DialogsType, MessagesDataType, NewMessageBody} from "../../redux/messages-reducer/messages-reducer";
import {AddMessageReduxForm, FormDialogsDataType} from "../../../src/components/dialogs/addMessageForm/AddMessageForm";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (messageBody: FormDialogsDataType) => void
    dialogsData: DialogsType[]
    messagesData: MessagesDataType[]
    newMessageBody: NewMessageBody
    isAuth: boolean
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {
        dialogsData,
        messagesData,
        sendMessage
    } = props;

    const dialogsElements = dialogsData.map(dialog =>
        <DialogItem key={dialog.id}
                    name={dialog.name}
                    id={dialog.id}
        />
    );

    const messageElements = messagesData.map(message =>
        <Message key={message.id}
                 message={message.message}
                 id={message.id}
                 ownMessage={message.ownMessage}
        />
    );

    const addNewMessage = (messageBody: FormDialogsDataType) => {
        sendMessage(messageBody);
    }

    return (
        <>
            <section className={"messenger"}>
                <div className="messages">
                    <div className="messagesWrapper">
                        <div className="messagesTop">
                            {messageElements}
                        </div>

                        <AddMessageReduxForm onSubmit={addNewMessage}/>

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
                                               placeholder={"Search for friends"}
                                        />
                                    </div>
                                </div>
                                {dialogsElements}
                            </div>
                        </div>

                        {/*<ChatMenu/>*/}
                        <ChatOnline/>
                    </div>

                </div>
            </section>
        </>
    );
};