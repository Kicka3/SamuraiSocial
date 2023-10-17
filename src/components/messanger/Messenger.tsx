import React from 'react';
import './messenger.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import {ChatMenu} from "./chatMenu/ChatMenu";

export const Messenger = () => {
    return (
        <>
            <div className={"messenger"}>
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
                    {/*//Люди справа*/}
                    <div className="chatOnlineWrapper">
                        <ChatMenu/>
                        <hr/>
                        <ChatOnline/>
                    </div>

                </div>

            </div>
        </>
    );
};

