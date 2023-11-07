import "./chatOnline.css"
import React from 'react';
import AvatarForChatOnline from '../../../public/assets/person/person0.jpeg'

export const ChatOnline = () => {
    return (
        <div className={"chatOnline"}>
            {/*//Друзья online*/}
            <div className="onlineFriendsWrapper">
                <div className={"onlineFriends"}>Friends online:</div>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                         src={AvatarForChatOnline}
                         alt={"avatarUsersInChat"}/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineUserName">Diana</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                         src={AvatarForChatOnline}
                         alt={"avatarUsersInChat"}/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineUserName">John</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                         src={AvatarForChatOnline}
                         alt={"avatarUsersInChat"}/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineUserName">Alex</span>
            </div>

        </div>
    );
};

