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
import {Dispatch} from "redux";


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
    sendMessage: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}

export const DialogsContainer =
    connect<MapStateToPropsType, MapDispatchToProps, any, RootReduxStoreType>(mapStateToProps, mapDispatchToProps)(Dialogs)
