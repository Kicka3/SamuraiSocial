import "./chatOnline.css"
import React from 'react';

export const ChatOnline = () => {
    return (
        <div className={"chatOnline"}>
            <div className="onlineFriendsWrapper">
                <div className={"onlineFriends"}>Friends online:</div>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                         src={'https://img.freepik.com/free-photo/pretty-blonde-female-yellow-sweater_273609-4675.jpg?w=826&t=st=1711396907~exp=1711397507~hmac=535eb9b33c1ff0d0ecc547d2225042ab130e4ec899229ab6b1f4b7d707dc2350'}
                         alt={"avatarUsersInChat"}/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineUserName">Diana</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                         src={'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1380&t=st=1711396520~exp=1711397120~hmac=50d4b6ec1ee7a25715f4e10e793b540c0ad7aac77493eda415b56f628447693c'}
                         alt={"avatarUsersInChat"}/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineUserName">John</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                         src={'https://img.freepik.com/free-photo/attractive-stylish-hipster-man-walking-city-street-with-leather-bag-wearing-sweatshot-sunglasses-urban-style-trend-sunny-day_285396-4660.jpg?t=st=1711397006~exp=1711400606~hmac=ca736c1fd2bf57db9f68ddbaaf9e14ce5790ae7d2d49d92265445c017e8a3b4a&w=1380'}
                         alt={"avatarUsersInChat"}/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineUserName">Alex</span>
            </div>
        </div>
    );
};

