import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {MyPostsContainer} from "./components/profile/myPosts/MyPostsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "../src/components/login/Login";


type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {


    return (
        <div className="App-wrapper">
            <div className="contentWrapper">
                <HeaderContainer />
            </div>

            <div className="mainContentWrapper">
                <Sidebar/>

                <div>
                    <Route path={'/dialogs'}
                           render={() =>
                               <DialogsContainer/>}
                    />
                    <Route path={'/profile/:userId?'}
                           render={() =>
                               <ProfileContainer />
                           }/>

                    <Route path={'/users'}
                           render={() =>
                               <UsersContainer />
                           }/>

                    <Route path={'/login'}
                           render={() =>
                               <Login />
                           }/>

                    <Route path={'/register'}
                           render={() =>
                               <h1>Register page</h1>
                           }/>

                    <Route path={'/posts'} component={MyPostsContainer}/>
                </div>

            </div>
        </div>

    );
};


