import {v1} from "uuid";
import {MainReducerType, MessagesPage} from "./state";

const MessagesReducer = (state: MessagesPage, action: MainReducerType): MessagesPage => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            debugger
            return {
                ...state, newMessageBody: state.newMessageBody = action.payload.body
            }
        }
        case "SEND-MESSAGE": {
            debugger
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newMessage = {id: v1(), ownMessage: true, message: body}
            // let newBodyState = state._state.messagesPage.messagesData.push(newMessage);
            return {...state, messagesData: [...state.messagesData, newMessage]}
        }
        default:
            return state
    }
}

export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        payload: {
            body
        }
    } as const
}
export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
        payload: {}
    } as const
}

export default MessagesReducer;