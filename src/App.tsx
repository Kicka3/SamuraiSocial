import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {MyPostsContainer} from "./components/profile/myPosts/MyPostsContainer";
import UsersContainer from "./components/users/UsersContainer";

type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {

    console.log('rerender App')

    return (
        <div className="App-wrapper">
            <div className="contentWrapper">
                <Header/>
            </div>

            <div className="mainContentWrapper">
                <Sidebar/>

                <div>
                    <Route path={'/dialogs'}
                           render={() =>
                               <DialogsContainer/>}
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile/>
                           }/>

                    <Route path={'/users'}
                           render={() =>
                               <UsersContainer/>
                           }/>

                    <Route path={'/posts'} component={MyPostsContainer}/>
                </div>
            </div>
        </div>

    );
};


