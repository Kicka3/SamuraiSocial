import {v1} from "uuid";

export type initialMessageStateType = typeof initialState;

export type DialogsType = {
    id: string;
    name: string;
}

export type MessageType = {
    id: string;
    ownMessage: boolean;
    message: string;
}

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Diana'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'John'},
        {id: v1(), name: 'Evgeny'},
        {id: v1(), name: 'Pank'},
    ] as DialogsType[],
    messagesData: [
        {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!'},
        {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!'},
        {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!!'},
        {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
        {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!!'},
    ] as MessageType[],
    newMessageBody: '',
}

export type MainMessageReducerType = UpdateNewMessageBodyACType | SendMessageACType

const messagesReducer = (state: initialMessageStateType = initialState, action: MainMessageReducerType): initialMessageStateType => {
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

export default messagesReducer;