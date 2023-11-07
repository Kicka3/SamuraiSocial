import React from 'react';
import './dialogs.css'
import {Message} from "./message/Message";
import {ChatOnline} from "./chatOnline/ChatOnline";
import '../messanger/chatMenu/chatMenu.css'
import './dialogsItem/dialogsItem.css'
import AvatarForChatOnline from "../../public/assets/person/person0.jpeg";


export const Dialogs = () => {
    return (
        <>
            <div className={"messenger"}>
                <div className="messages">
                    <div className="messagesWrapper">
                        <div className="messagesTop">
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
                        <div className="chatMessagesBottom">
                                <textarea className="chatMessageInput"
                                          placeholder={"Say hello!"}
                                ></textarea>
                            <button className="chatSubmitBtn">Send</button>
                        </div>
                    </div>
                </div>

                {/*//Люди справа*/}
                <div className={"dialogs"}>
                    <div className="chatOnlineWrapper">
                        <div className="chatMenu">

                            <div className="chatMenuWrapper">

                                {/*//ChatMenu из компоненты CHATMENU*/}
                                <div className="chatMenu">
                                    <div className="dialogsFriends">Your dialogues:</div>
                                    <div className="chatMenuWrapper">
                                        <input className={"chatMenuInput"}
                                               type="text"
                                               placeholder={"Search for friends"}/>
                                    </div>
                                </div>

                                <div className={`${"conversation"} ${'conversationActive'}`}>
                                    <div className="chatOnlineFriend">
                                        <div className="chatOnlineImgContainer">
                                            <img className="chatOnlineImg"
                                                 src={AvatarForChatOnline}
                                                 alt={"avatarUsersInChat"}/>
                                            <div className="chatOnlineBadge"></div>
                                        </div>
                                        <span className="chatOnlineUserName">Diana</span>
                                    </div>
                                </div>

                                <div className={"conversation"}>
                                    <div className="chatOnlineFriend">
                                        <div className="chatOnlineImgContainer">
                                            <img className="chatOnlineImg"
                                                 src={AvatarForChatOnline}
                                                 alt={"avatarUsersInChat"}/>
                                            <div className="chatOnlineBadge"></div>
                                        </div>
                                        <span className="chatOnlineUserName">John</span>
                                    </div>
                                </div>


                                {/*//Тут всё из компоненты DialogsItem*/}
                                {/*            /!*<DialogsItem/>*!/*/}
                            </div>
                        </div>

                        {/*<ChatMenu/>*/}
                        <ChatOnline/>
                    </div>

                </div>
            </div>
        </>
    );
};

