//From Dialogs
// let dialogsData = [
//     {id: 1, name: 'Diana'},
//     {id: 2, name: 'Alex'},
//     {id: 3, name: 'John'},
//     {id: 4, name: 'Evgeny'},
//     {id: 5, name: 'Pank'},
// ]
// let messagesData = [
//     {id: 1, ownMessage: false, message: 'Hello this is a message!'},
//     {id: 2, ownMessage: true, message: 'Hello this is a message from own!!'},
//     {id: 3, ownMessage: false, message: 'Hello this is a message!'},
//     {id: 4, ownMessage: true, message: 'Hello this is a message from own!!'},
//     {id: 5, ownMessage: false, message: 'Hello this is a message!'},
//     {id: 6, ownMessage: true, message: 'Hello this is a message from own!!!'},
//     {id: 7, ownMessage: false, message: 'Hello this is a message!'},
//     {id: 8, ownMessage: true, message: 'Hello this is a message from own!!!'},
// ]
//From Profile
// let postsData = [
//     {id: 1, message: "Jopa", likesCount: 5},
//     {id: 2, message: "My little jopa", likesCount: 25},
// ]
import {v1} from "uuid";
import MessagesReducer, {SendMessageACType, UpdateNewMessageBodyACType} from "./messages-reducer";
import ProfileReducer, {AddPostACType, UpdatePostNewTextACType} from "./profile-reducer";
import SideBarReducer from "./sideBar-reducer";


export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}
export type MessageType = {
    id: string;
    ownMessage: boolean;
    message: string;
}
export type DialogsType = {
    id: string;
    name: string;
}


export type PostsDataType = Array<PostsType>;
export type MessagesDataType = Array<MessageType>;
export type DialogsDataType = Array<DialogsType>;
export type SideBarType = {}


export type ProfilePageType = {
    postsData: PostsDataType;
    newPostText: string
}
export type MessagesPage = {
    messagesData: MessagesDataType;
    dialogsData: DialogsDataType;
    newMessageBody: string;
}

//Type for STATE
export type RootStateType = {
    profilePage: ProfilePageType;
    messagesPage: MessagesPage;
    sideBarPage: SideBarType;
}

//Type for STORE
export type MainStoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: MainReducerType) => void
}

//MAIN REDUCER TYPE
export type MainReducerType = AddPostACType | UpdatePostNewTextACType | UpdateNewMessageBodyACType | SendMessageACType
//
// //ACTIONS:
// type AddPostACType = ReturnType<typeof addPostAC>
// export const addPostAC = (newPostText: string) => {
//     return {
//         type: 'ADD-POST',
//         payload: {
//             newPostText
//         }
//     } as const
// }
// export type UpdatePostNewTextACType = ReturnType<typeof updatePostNewTextAC>
// export const updatePostNewTextAC = (newText: string) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         payload: {
//             newText
//         }
//     } as const
// }
// export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
// export const updateNewMessageBodyAC = (body: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         payload: {
//             body
//         }
//     } as const
// }
// export type SendMessageACType = ReturnType<typeof sendMessageAC>
// export const sendMessageAC = () => {
//     return {
//         type: 'SEND-MESSAGE',
//         payload: {}
//     } as const
// }

//STORE-STATE:
export const store: MainStoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: "Jopa", likesCount: 5},
                {id: v1(), message: "My little Jopa", likesCount: 25},
            ],
            newPostText: 'Whussap?',
        },
        messagesPage: {
            dialogsData: [
                {id: v1(), name: 'Diana'},
                {id: v1(), name: 'Alex'},
                {id: v1(), name: 'John'},
                {id: v1(), name: 'Evgeny'},
                {id: v1(), name: 'Pank'},
            ],
            messagesData: [
                {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
                {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!'},
                {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
                {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!'},
                {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
                {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!!'},
                {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
                {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!!'},
            ],
            newMessageBody: '',
        },
        sideBarPage: {},
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.messagesPage = MessagesReducer(this._state.messagesPage, action);
        this._state.sideBarPage = SideBarReducer(this._state.sideBarPage, action);

        this._callSubscriber(this._state);

        // switch (action.type) {
        //     case 'ADD-POST': {
        //         // debugger
        //         console.log('Добавляю пост addPost')
        //         let newPost = {
        //             id: v1(),
        //             message: this._state.profilePage.newPostText,
        //             likesCount: 0
        //         }
        //
        //         let newState = {...store, profilePage: store._state.profilePage.postsData.unshift(newPost)}
        //         console.log(this._state.profilePage.postsData);
        //
        //         store._state.profilePage.newPostText = '';
        //         this._callSubscriber(this._state);
        //
        //         return newState;
        //     }
        //     case 'UPDATE-NEW-POST-TEXT': {
        //         // debugger
        //         let updPostText = this._state.profilePage.newPostText = action.payload.newText;
        //         this._callSubscriber(this._state);
        //
        //         return updPostText;
        //     }
        //     case 'UPDATE-NEW-MESSAGE-BODY': {
        //         let newInputValueState = this._state.messagesPage.newMessageBody = action.payload.body
        //         this._callSubscriber(this._state);
        //         return newInputValueState
        //     }
        //     case "SEND-MESSAGE": {
        //         // debugger
        //         let body = this._state.messagesPage.newMessageBody;
        //         this._state.messagesPage.newMessageBody = '';
        //         let newMessage = {id: v1(), ownMessage: true, message: body}
        //         let newBodyState = this._state.messagesPage.messagesData.push(newMessage);
        //         this._callSubscriber(this._state);
        //         return newBodyState
        //     }
        //     default:
        //         return this._state
        // }
    },
};

//@ts-ignore
window.store = store;