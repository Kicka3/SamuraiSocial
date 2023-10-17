import React from 'react';
import './messenger.css'
import Header from "../header/Header";
import {Dialogs} from "../dialogs/Dialogs";
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";

export const Messenger = () => {
    return (
        <>
            <div className={"messenger"}>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className={"chatMenuInput"}
                               type="text"
                               placeholder={"Search for friends"}/>
                        {/*//Люди слева*/}
                        <Dialogs/>

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatboxTop">
                            {/*//Message принимает пропс onwMessage(сообщение овнера)*/}
                            <Message/>
                            <Message ownMessage={true}/>
                            <Message/>
                            <Message ownMessage={true}/>
                            <Message/>
                            <Message ownMessage={true}/>
                            <Message/>
                            <Message ownMessage={true}/>
                            <Message/>
                            <Message/>
                            <Message ownMessage={true}/>
                            <Message/>
                            <Message ownMessage={true}/>
                            <Message/>
                        </div>
                        <div className="chatBoxBottom">
                                <textarea className="chatMessageInput"
                                          placeholder={"Say hello!"}></textarea>
                            <button className="chatSubmitBtn">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>
    );
};

