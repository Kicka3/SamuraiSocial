import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {MyPostsContainer} from "./components/profile/myPosts/MyPostsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

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
                               <ProfileContainer />
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


