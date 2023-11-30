import React from "react";
// From Dialogs
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
// import {v1} from "uuid";
// import messagesReducer, {SendMessageACType, UpdateNewMessageBodyACType} from "../messages-reducer/messages-reducer";
// import profileReducer, {AddPostACType, UpdatePostNewTextACType} from "../profile-reducer/profile-reducer";
// import sideBarReducer from "../sideBar-reducer/side-bar-reducer";
//
//
// export type PostsType = {
//     id: string;
//     message: string;
//     likesCount: number;
// }
// export type MessageType = {
//     id: string;
//     ownMessage: boolean;
//     message: string;
// }
// export type DialogsType = {
//     id: string;
//     name: string;
// }
//
//
// export type PostsDataType = Array<PostsType>;
// export type MessagesDataType = Array<MessageType>;
// export type DialogsDataType = Array<DialogsType>;
// export type SideBarType = {}
//
//
// export type ProfilePageType = {
//     postsData: PostsDataType;
//     newPostText: string
// }
// export type MessagesPage = {
//     messagesData: MessagesDataType;
//     dialogsData: DialogsDataType;
//     newMessageBody: string;
// }
//
// //Type for STATE
// export type RootStateType = {
//     profilePage: ProfilePageType;
//     messagesPage: MessagesPage;
//     sideBarPage: SideBarType;
// }
//
// //Type for STORE
// export type MainStoreType = {
//     _state: RootStateType
//     _callSubscriber: (state: RootStateType) => void
//     subscribe: (observer: (state: RootStateType) => void) => void
//     getState: () => RootStateType
//     dispatch: (action: MainReducerType) => void
// }
//
// //MAIN REDUCER TYPE
// export type MainReducerType = AddPostACType | UpdatePostNewTextACType | UpdateNewMessageBodyACType | SendMessageACType
//
//
// //STORE-STATE:
// export const myOldStore: MainStoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: v1(), message: "Jopa", likesCount: 5},
//                 {id: v1(), message: "My little Jopa", likesCount: 25},
//             ],
//             newPostText: 'Whussap?',
//         },
//         messagesPage: {
//             dialogsData: [
//                 {id: v1(), name: 'Diana'},
//                 {id: v1(), name: 'Alex'},
//                 {id: v1(), name: 'John'},
//                 {id: v1(), name: 'Evgeny'},
//                 {id: v1(), name: 'Pank'},
//             ],
//             messagesData: [
//                 {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
//                 {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!'},
//                 {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
//                 {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!'},
//                 {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
//                 {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!!'},
//                 {id: v1(), ownMessage: false, message: 'Hello this is a message!'},
//                 {id: v1(), ownMessage: true, message: 'Hello this is a message from own!!!'},
//             ],
//             newMessageBody: '',
//         },
//         sideBarPage: {},
//     },
//     _callSubscriber() {
//         console.log('state was changed')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action);
//
//         this._callSubscriber(this._state);
//
//     },
// };
//
// //@ts-ignore
// window.store = myOldStore;