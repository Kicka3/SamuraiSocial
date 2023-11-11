import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Dialogs} from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import MyPost from "./components/profile/myPosts/myPost/MyPost";
import Post from "./components/profile/myPosts/myPost/post/Post";
import MyPosts from "./components/profile/myPosts/MyPosts";


function App() {
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
                        <Route path={'/profile'} component={Profile}/>
                        <Route exact path={'/dialogs'} component={Dialogs}/>
                        <Route path={'/myposts'} component={MyPosts}/>

                        {/*<Route path={'/mypost'} component={MyPost}/>*/}
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
