import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Dialogs} from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {MyPosts} from "./components/profile/myPosts/MyPosts";
import {StoreType} from "./redux/redux-store";
import {MainProfileReducerType} from "./redux/profile-reducer/profile-reducer";

type AppPropsType = {
    store: StoreType
    dispatch: (action: MainProfileReducerType) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    const {store} = props;
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
                               <Dialogs
                                   store={store}
                               />}
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile
                                   store={store}
                               />}
                    />


                    <Route path={'/myposts'} component={MyPosts}/>

                    {/*<MyPost/>*/}
                    {/*<Post titlePost={'lolo'} likesCount={21}/>*/}
                    {/*<Profile/>*/}
                    {/*<DialogItem/>*/}
                </div>
            </div>
        </div>

    );
};


