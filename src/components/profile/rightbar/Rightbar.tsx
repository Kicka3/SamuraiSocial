import "./rightbar.css";
import React from "react";
import "./rightbar.css";
import {ProfileResponseType} from "../../../redux/profile-reducer/profile-reducer";
import {ProfileContacts} from "./profileContacts/ProfileContacts";
import {ProfileRightBar} from "./pfrofileRightbar/ProfileRightBar";
import {HomeRightBar} from "./homeRightbar/HomeRightBar";


type ProfileBarPropsType = {
    profile: ProfileResponseType | null,
}

export const ProfileBar: React.FC<ProfileBarPropsType> = ({profile}) => {


    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                <ProfileRightBar profile={profile}/>
                <HomeRightBar profile={profile}/>
                <ProfileContacts profile={profile}/>
            </div>
        </div>
    );
};



