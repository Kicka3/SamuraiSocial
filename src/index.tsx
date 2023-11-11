import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@100;300;400;700;900&display=swap"
    rel="stylesheet"/>

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    ownMessage: boolean
    message: string
}


export type postsDataType = {
    id: number
    message: string
    likesCount: number
}


//From Dialogs

let dialogsData = [
    {id: 1, name: 'Diana'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Evgeny'},
    {id: 5, name: 'Pank'},
]

let messagesData = [
    {id: 1, ownMessage: false, message: 'Hello this is a message!'},
    {id: 2, ownMessage: true, message: 'Hello this is a message from own!!'},
    {id: 3, ownMessage: false, message: 'Hello this is a message!'},
    {id: 4, ownMessage: true, message: 'Hello this is a message from own!!'},
    {id: 5, ownMessage: false, message: 'Hello this is a message!'},
    {id: 6, ownMessage: true, message: 'Hello this is a message from own!!!'},
    {id: 7, ownMessage: false, message: 'Hello this is a message!'},
    {id: 8, ownMessage: true, message: 'Hello this is a message from own!!!'},
]

//From Profile

let postsData = [
    {id: 1, message: "Jopa", likesCount: 5},
    {id: 2, message: "My little jopa", likesCount: 25},
]



ReactDOM.render(
    <App postsData={postsData}
         messagesData={messagesData}
         dialogsData={dialogsData}
    />,
    document.getElementById('root')
    );