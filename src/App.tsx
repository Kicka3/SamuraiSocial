import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Dialogs} from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {Route} from "react-router-dom";
import {MyPosts} from "./components/profile/myPosts/MyPosts";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updatePostNewText: (newPostText: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    const {state, addPost, updatePostNewText} = props;
    console.log('rerender App')

    return (
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
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs state={state.messagesPage}

                               />}
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile profilePage={state.profilePage}
                                        addPost={addPost}
                                        updatePostNewText={updatePostNewText}
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


