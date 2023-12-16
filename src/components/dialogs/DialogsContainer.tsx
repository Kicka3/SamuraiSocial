import './dialogs.css'
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {Dialogs} from "./Dialogs";
import {
    DialogsType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/messages-reducer/messages-reducer";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps;


type MapStateToPropsType = {
    dialogsData: DialogsType[]
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        dialogsData: state.message.dialogsData
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
            console.log('диспатчу: ' + body)
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
