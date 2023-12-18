import messagesReducer, {
    DialogsType,
    InitialMessageStateType,
    MessagesDataType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "./messages-reducer";
import {v1} from "uuid";
import {unFollowAC, usersReducer} from "../users-reducer/users-reducer";


let startState: InitialMessageStateType;

beforeEach(() => {

    startState = {
        dialogsData: [
            {},
        ] as DialogsType[],
        messagesData: [
            {id: v1(), ownMessage: false, message: 'Hello this is a messagePage!'},
        ] as MessagesDataType [],
        newMessageBody: '',
    }
});

test('message must be sent', () => {
    const action = sendMessageAC();
    const endState = messagesReducer(startState, action);

    expect(endState.messagesData.length).toBe(2);
});

test('new message body should be changed', () => {
    const newBody = 's13';
    const action = updateNewMessageBodyAC(newBody);
    const endState = messagesReducer(startState, action);

    expect(endState.newMessageBody).toBe(newBody);
});
