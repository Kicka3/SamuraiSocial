import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Dialogs} from "./components/messanger/Dialogs";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import MyPost from "./components/myPosts/MyPost";
import Post from "./components/myPosts/post/Post";
import Feed from "./components/feed/Feed";


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
                        <Route path={'/messages'} component={Dialogs}/>
                        <Route path={'/mypost'} component={MyPost}/>
                        <Route path={'/feed'} component={Feed}/>


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
