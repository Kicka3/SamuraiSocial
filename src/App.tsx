import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Messenger} from "./components/messanger/Messenger";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
    return (
        <div className="App-wrapper">
            <div className="mainContentWrapper">
                <Header/>

            </div>

            <div className="contentWrapper">
                <Sidebar/>
                {/*<Profile/>*/}
                <Messenger/>
            </div>
        </div>
    );
}

export default App;
