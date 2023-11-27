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
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: MainReducerType) => void
    // addPost: () => void
    // updatePostNewText: (newPostText: string) => void
}


// export type MainReducerType = AddPostActionType | UpdateNewPostTextActionType
export type MainReducerType = addPostACType | updatePostNewTextACType

// type AddPostActionType = {
//     type: 'ADD-POST',
//     newPostText: string
// }
// type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: string
// }

//ACTIONS:
type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPostText
        }
    } as const
}
export type updatePostNewTextACType = ReturnType<typeof updatePostNewTextAC>
export const updatePostNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
        }
    } as const
}

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
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST': {
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
            }
            case 'UPDATE-NEW-POST-TEXT': {
                // debugger
                let updPostText = this._state.profilePage.newPostText = action.payload.newText;
                RerenderEntireTree(this._state);

                return updPostText;
            }
            default:
                return this._state
        }
    },
};

//@ts-ignore
window.store = store;