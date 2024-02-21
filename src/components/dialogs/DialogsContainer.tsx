import './dialogs.css'
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {Dialogs} from "./Dialogs";
import {
    DialogsType, MessagesDataType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/messages-reducer/messages-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../src/hoc/WithAuthRedirect";
import React from "react";
import {FormDialogsDataType} from "../../../src/components/dialogs/addMessageForm/AddMessageForm";


type MapStateToPropsType = {
    dialogsData: DialogsType[]
    messagesData: MessagesDataType[]
    newMessageBody: string
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
        newMessageBody: state.messagePage.newMessageBody,
    }
}

type MapDispatchToProps = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (formData: FormDialogsDataType) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: (messageBody: FormDialogsDataType) => {
            dispatch(sendMessageAC(messageBody));
        },
    }
}



export default compose<React.ComponentType>(
    connect<MapStateToPropsType,
        MapDispatchToProps,
        any,
        RootReduxStoreType>
    (mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)