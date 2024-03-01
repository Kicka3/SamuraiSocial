import messagesReducer, {
    DialogsType,
    InitialMessageStateType,
    MessagesDataType,
    sendMessageAC,
} from "./messages-reducer";
import {v1} from "uuid";


let startState: InitialMessageStateType;

beforeEach(() => {

    startState = {
        dialogsData: [
            {},
        ] as DialogsType[],
        messagesData: [
            {id: v1(), ownMessage: false, message: 'Hello this is a messagePage!'},
        ] as MessagesDataType [],
        // newMessageBody: '',
    }

});

test('message must be sent', () => {
    const newMessageBody: string = 'TESTMESSAGE'
    const action = sendMessageAC({newMessageBody});
    const endState = messagesReducer(startState, action);

    expect(endState.messagesData.length).toBe(2);
});

