import './dialogs.css'
import './/chatMenu/chatMenu.css'
import './dialogItem/dialogItem.css'
import {Dialogs} from "./Dialogs";
import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/messages-reducer/messages-reducer";
import StoreContext from "../../store-context/StoreContext";
import {connect} from "react-redux";
import {RootReduxStoreType, StoreType} from "../../redux/redux-store";
import {InitialProfileStateType} from "../../redux/profile-reducer/profile-reducer";


type DialogsPropsType = {
    // store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    // const {store} = props;
    return (

        <StoreContext.Consumer>
            {store => {
                const state = store.getState().message;

                const onSendMessageClickHandler = () => {
                    store.dispatch(sendMessageAC());
                }

                const onNewMessageChangeHandler = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body));
                }

                const dialogsData = state.dialogsData;
                const messagesData = state.messagesData;
                const newMessageBody = state.newMessageBody;

                return <Dialogs sendMessage={onSendMessageClickHandler}
                                updateNewMessageBody={onNewMessageChangeHandler}
                                dialogsData={dialogsData}
                                messagesData={messagesData}
                                newMessageBody={newMessageBody}
                />
            }
            }
        </StoreContext.Consumer>
    );
};

type MapStateToPropsType = {
    dialogsData: InitialProfileStateType
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {

    return {
        dialogsData: state.message.dialogsData,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
