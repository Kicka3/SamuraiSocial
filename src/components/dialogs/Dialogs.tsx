import React, {ChangeEvent, KeyboardEvent} from 'react';
import './dialogs.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/messages-reducer/messages-reducer";
import {StoreType} from "../../redux/redux-store";


type DialogsPropsType = {
    store: StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {store} = props;
    const state = store.getState();

    const dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem key={dialog.id}
                    name={dialog.name}
                    id={dialog.id}
        />
    );

    const messageElements = state.messagesData.map(message =>
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
        store.dispatch(sendMessageAC());
    }
    const newMessageBody = state.newMessageBody;
    const onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        store.dispatch(updateNewMessageBodyAC(body));
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

