import './dialogs.css'
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/messages-reducer/messages-reducer";


type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const {store} = props;
    const state = store.getState();


    //SEND MESSAGE:
    // const PressEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     const value = e.key;
    //     if (value === 'Enter') {
    //         onSendMessageClickHandler();
    //     }
    // }
    const onSendMessageClickHandler = () => {
        store.dispatch(sendMessageAC());
    }

    const newMessageBody = state.message.newMessageBody;
    const onNewMessageChangeHandler = (body: string) => {
        store.dispatch(updateNewMessageBodyAC(body));
    }


    return (
        <Dialogs sendMessage={onSendMessageClickHandler}
                 updateNewMessageBody={onNewMessageChangeHandler}
        />
    );
};

