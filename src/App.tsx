import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {MyPosts} from "./components/profile/myPosts/MyPosts";
import {store} from "./redux/redux-store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

type AppPropsType = {
    // store: StoreType
    // dispatch: (action: MainProfileReducerType) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    const {} = props;

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
                               <DialogsContainer/>
                           }
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


