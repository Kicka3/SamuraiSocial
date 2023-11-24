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

let rerenderEntireTree = (state: RootStateType) => {
    console.log('state was changed')
}

export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}
export type MessageType = {
    id: number;
    ownMessage: boolean;
    message: string;
}
export type DialogsType = {
    id: number;
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
}


export type RootStateType = {
    profilePage: ProfilePageType;
    messagesPage: MessagesPage;
    sideBarPage: SideBarType;
}


const state: RootStateType = {
    profilePage: {
        postsData: [
            {id: v1(), message: "Jopa", likesCount: 5},
            {id: v1(), message: "My little Jopa", likesCount: 25},
        ],
        newPostText: 'Whussap?',
    },
    messagesPage: {
        messagesData: [
            {id: 1, ownMessage: false, message: 'Hello this is a message!'},
            {id: 2, ownMessage: true, message: 'Hello this is a message from own!!'},
            {id: 3, ownMessage: false, message: 'Hello this is a message!'},
            {id: 4, ownMessage: true, message: 'Hello this is a message from own!!'},
            {id: 5, ownMessage: false, message: 'Hello this is a message!'},
            {id: 6, ownMessage: true, message: 'Hello this is a message from own!!!'},
            {id: 7, ownMessage: false, message: 'Hello this is a message!'},
            {id: 8, ownMessage: true, message: 'Hello this is a message from own!!!'},
        ],
        dialogsData: [
            {id: 1, name: 'Diana'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Evgeny'},
            {id: 5, name: 'Pank'},
        ],
    },
    sideBarPage: {},
};

export const addPost = () => {
    // debugger
    console.log('Добавляю пост addPost')
    let newPost = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    let newState = {...state, profilePage: state.profilePage.postsData.unshift(newPost)}
    console.log(state.profilePage.postsData);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
    return newState;
};

export const updatePostNewText = (newPostText: string) => {
    let updPostText = state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
    return updPostText;
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer;
}


//@ts-ignore
window.state = state;
export default state;