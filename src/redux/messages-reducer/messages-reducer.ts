import {v1} from "uuid";
import {FormDialogsDataType} from "../../../src/components/dialogs/addMessageForm/AddMessageForm";


export type DialogsType = {
    id: string;
    name: string;
}
export type MessagesDataType = {
    id: string;
    ownMessage: boolean;
    message: string;
}
export type NewMessageBody = string;


export type InitialMessageStateType = typeof initialState;

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Diana'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'John'},
        {id: v1(), name: 'Evgeny'},
        {id: v1(), name: 'Pank'},
    ] as DialogsType[],
    messagesData: [
        {id: v1(), ownMessage: false, message: 'Hello this is a messagePage!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a messagePage from own!!'},
        {id: v1(), ownMessage: false, message: 'Hello this is a messagePage!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a messagePage from own!!'},
        {id: v1(), ownMessage: false, message: 'Hello this is a messagePage!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a messagePage from own!!!'},
        {id: v1(), ownMessage: false, message: 'Hello this is a messagePage!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a messagePage from own!!!'},
    ] as MessagesDataType [],
    newMessageBody: '',
}

export type MainMessageActionsType = UpdateNewMessageBodyACType | SendMessageACType

const messagesReducer = (state: InitialMessageStateType = initialState, action: MainMessageActionsType): InitialMessageStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            console.log(action.payload.body)
            return {
                ...state, newMessageBody: action.payload.body
            }
        }
        case "SEND-MESSAGE": {
            let body = action.payload.messageBody;
            let newMessage = {id: v1(), ownMessage: true, message: body}
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
export const sendMessageAC = (messageBody: FormDialogsDataType) => {
    return {
        type: 'SEND-MESSAGE',
        payload: {
            messageBody
        }
    } as const
}

export default messagesReducer;