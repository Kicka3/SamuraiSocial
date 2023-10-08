import React from 'react';
import '../messanger/Messenger.css'
import Header from "../header/Header";

export const Messenger = () => {
    return (
        <>
            <Header/>
            <div className={"messenger"}>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className={"chatMenuInput"} type="text" placeholder={"Search for friends"}/>

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        box
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        online
                    </div>
                </div>
            </div>
        </>
    );
};

