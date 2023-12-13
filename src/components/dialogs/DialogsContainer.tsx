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


// type DialogsPropsType = {
// //     // store: StoreType
// // }

// export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
//     // const {store} = props;
//     return (
//
//         <StoreContext.Consumer>
//             {store => {
//                 const state = store.getState().message;
//
//                 const onSendMessageClickHandler = () => {
//                     store.dispatch(sendMessageAC());
//                 }
//
//                 const onNewMessageChangeHandler = (body: string) => {
//                     store.dispatch(updateNewMessageBodyAC(body));
//                 }
//
//                 const dialogsData = state.dialogsData;
//                 const messagesData = state.messagesData;
//                 const newMessageBody = state.newMessageBody;
//
//                 return <Dialogs sendMessage={onSendMessageClickHandler}
//                                 updateNewMessageBody={onNewMessageChangeHandler}
//
//                                 dialogsData={dialogsData}
//                                 messagesData={messagesData}
//                                 newMessageBody={newMessageBody}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

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
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}



export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
