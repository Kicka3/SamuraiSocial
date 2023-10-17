import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import {Messenger} from "./components/messanger/Messenger";
import Sidebar from "./components/profile/sidebar/Sidebar";


function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            {/*<Profile/>*/}
            <Messenger/>
        </div>
    );
}

export default App;
