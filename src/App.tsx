import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Dialogs} from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import {MyPosts} from "./components/profile/myPosts/MyPosts";
import {DialogsDataType, MessagesDataType, postsDataType} from "./index";

type AppPropsType = {
    postsData: postsDataType[]
    messagesData: MessagesDataType[]
    dialogsData: DialogsDataType[]
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <div className="contentWrapper">
                    <Header/>
                </div>

                <div className="mainContentWrapper">
                    <Sidebar/>
                    {/*<Sidebar/>*/}
                    <div>
                        {/*Вариант без пропсов*/}
                        {/*<Route path={'/profile'} component={Profile}/>*/}
                        {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
                        <Route path={'/profile'} render={() => <Profile postsData={props.postsData}
                        />}/>
                        <Route exact path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData}
                                                                              messagesData={props.messagesData}
                        />}/>


                        <Route path={'/myposts'} component={MyPosts}/>
                        {/*<MyPost/>*/}
                        {/*<Post titlePost={'lolo'} likesCount={21}/>*/}
                        {/*<Profile/>*/}
                        {/*<DialogItem/>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
