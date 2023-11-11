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

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type MessageType = {
    id: number
    ownMessage: boolean
    message: string
}
type DialogsType = {
    id: number
    name: string
}


export type PostsDataType = Array<PostsType>
type MessagesDataType = Array<MessageType>
type DialogsDataType = Array<DialogsType>
type SideBarType = {}


export type ProfilePageType = {
    postsData: PostsDataType
}
export type MessagesPage = {
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
}


export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPage
    sideBarPage: SideBarType,
}


let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Jopa", likesCount: 5},
            {id: 2, message: "My little jopa", likesCount: 25},
        ],
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
}

export default state;