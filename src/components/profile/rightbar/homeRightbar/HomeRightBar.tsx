import React from 'react';
import OnlineUsers from "../../onlineUsers/OnlineUsers";
import {ProfileResponseType} from "../../../../redux/profile-reducer/profile-reducer";


type HomeRightBarPropsType = {
    profile: ProfileResponseType | null,
}

export const HomeRightBar:React.FC<HomeRightBarPropsType> = ({profile}) => {
    return (
        <div className="HomeRightbarWrapper">

            <div className="UserOnlineWrapper">
                <h4 className="rightbarTitle">Online Friends:</h4>
                <ul className="rightbarFriendList">
                    <OnlineUsers/>
                </ul>
            </div>

            <div className="birthdayContainer">
                <img className="birthdayImg" src={"assets/gift.png"} alt="birthdayImg"/>
                <span className="birthdayText">
            <b>Alexandr Mironov</b> <b>and 2 other friends</b> have a birthday today.
          </span>
            </div>
            {/*//КАРТИНКА с днем рождения*/}
            {/*<img className="rightbarAd" src={'assets/ad.png'} alt="rightbarAdImg"/>*/}

        </div>
    )
};