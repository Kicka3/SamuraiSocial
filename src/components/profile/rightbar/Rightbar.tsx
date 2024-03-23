import "./rightbar.css";
import React from "react";
import "./rightbar.css";
import {ProfileResponseType} from "../../../redux/profile-reducer/profile-reducer";
import {ProfileContacts} from "./profileContacts/ProfileContacts";
import {ProfileRightBar} from "./profileRightbar/ProfileRightBar";
import {FriendsRightBar} from "../rightbar/homeRightbar/FriendsRightBar";


type ProfileBarPropsType = {
    profile: ProfileResponseType | null
    isOwner: boolean
}

export const RightBar: React.FC<ProfileBarPropsType> = ({profile, isOwner}) => {

    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                {/*//Дописать!!!*/}
                <ProfileRightBar profile={profile}/>
                <FriendsRightBar profile={profile}/>
                <ProfileContacts profile={profile} isOwner={isOwner}/>
            </div>
        </div>
    );
};



