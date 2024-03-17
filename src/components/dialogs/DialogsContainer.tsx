import './dialogs.css'
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {Dialogs} from "./Dialogs";
import {
    DialogsType, FormDialogsDataType, MessagesDataType,
    sendMessageAC,
} from "../../redux/messages-reducer/messages-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    dialogsData: DialogsType[]
    messagesData: MessagesDataType[]
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
    }
}

type MapDispatchToProps = {
    sendMessage: (messageBody: FormDialogsDataType) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (messageBody: FormDialogsDataType) => {
            dispatch(sendMessageAC(messageBody));
        },
    }
}

export default compose<React.ComponentType>(
    withRouter,
    WithAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToProps, any, RootReduxStoreType>(mapStateToProps, mapDispatchToProps))(Dialogs)