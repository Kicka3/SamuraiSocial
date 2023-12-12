import React, {ChangeEvent, KeyboardEvent} from 'react';
import './dialogs.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {DialogsType, MessagesDataType, NewMessageBody} from "../../redux/messages-reducer/messages-reducer";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsData: DialogsType[]
    messagesData: MessagesDataType[]
    newMessageBody: NewMessageBody
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {
        dialogsData,
        messagesData,
        newMessageBody,
        updateNewMessageBody,
        sendMessage
    } = props;


    // const dialogsElements = state.message.dialogsData.map(dialog =>

    const dialogsElements = dialogsData.map(dialog =>
        <DialogItem key={dialog.id}
                    name={dialog.name}
                    id={dialog.id}
        />
    );

    // const messageElements = state.message.messagesData.map(message =>

    const messageElements = messagesData.map(message =>
        <Message key={message.id}
                 message={message.message}
                 id={message.id}
                 ownMessage={message.ownMessage}
        />
    );

    //SEND MESSAGE:
    const PressEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        const value = e.key;
        if (value === 'Enter') {
            onSendMessageClickHandler();
        }
    }
    const onSendMessageClickHandler = () => {
        sendMessage();
    }
    // const newMessageBody = state.message.newMessageBody;

    const onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        updateNewMessageBody(body)
    }


    return (
        <>
            <section className={"messenger"}>
                <div className="messages">
                    <div className="messagesWrapper">
                        <div className="messagesTop">
                            {messageElements}
                        </div>
                        <div className="chatMessagesBottom">
                                <textarea className="chatMessageInput"
                                          placeholder={"Say hello!"}
                                          value={newMessageBody}
                                          onChange={onNewMessageChangeHandler}
                                          onKeyPress={PressEnterHandler}
                                ></textarea>
                            <button className="chatSubmitBtn"
                                    onClick={onSendMessageClickHandler}
                            >Send
                            </button>
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
            </section>
        </>
    );
};

