import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {store} from "./redux/redux-store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {MyPostsContainer} from "./components/profile/myPosts/MyPostsContainer";

type AppPropsType = {
    // store: StoreType
    // dispatch: (action: MainProfileReducerType) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    const {} = props;
    const state = store.getState();

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
                               <DialogsContainer
                               />
                           }
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile/>
                    }
                    />


                    <Route path={'/myposts'} component={MyPostsContainer}/>

                    {/*<MyPost/>*/}
                    {/*<Post titlePost={'lolo'} likesCount={21}/>*/}
                    {/*<Profile/>*/}
                    {/*<DialogItem/>*/}
                </div>
            </div>
        </div>

    );
};


