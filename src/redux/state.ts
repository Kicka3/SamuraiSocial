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
import {RerenderEntireTree} from "../index";


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

export type MainStoreType = {
    _state: RootStateType
    rerenderEntireTree: (state: RootStateType) => void
    addPost: () => void
    updatePostNewText: (newPostText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
}

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
    },
    rerenderEntireTree(state: RootStateType) {
        console.log('state was changed')
    },
    addPost() {
        // debugger
        console.log('Добавляю пост addPost')
        let newPost = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        let newState = {...store, profilePage: store._state.profilePage.postsData.unshift(newPost)}
        console.log(this._state.profilePage.postsData);

        store._state.profilePage.newPostText = '';
        RerenderEntireTree(this._state);

        return newState;
    },
    updatePostNewText(newPostText: string) {
        let updPostText = this._state.profilePage.newPostText = newPostText;
        RerenderEntireTree(this._state);

        return updPostText;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    }

};

//@ts-ignore
window.store = store;