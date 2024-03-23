import "./rightbar.css";
import React from "react";
import "./rightbar.css";
import {ProfileResponseType} from "../../../redux/profile-reducer/profile-reducer";
import {ProfileContacts} from "./profileContacts/ProfileContacts";
import {InformationProfile} from "./informationProfile/InformationProfile";
import {FriendsRightBar} from "./friendsRightbar/FriendsRightBar";
import {
    ProfileContactsFormDataType
} from "./profileContacts/profileContactsForm/ProfileContactsForm";


type ProfileBarPropsType = {
    profile: ProfileResponseType | null
    isOwner: boolean
    saveProfileInfoTC: (formData: ProfileContactsFormDataType) => void
}

export const RightBar: React.FC<ProfileBarPropsType> = ({profile, isOwner, saveProfileInfoTC}) => {

    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                <InformationProfile profile={profile}/>
                <FriendsRightBar profile={profile}/>
                <ProfileContacts profile={profile} isOwner={isOwner} saveProfileInfoTC={saveProfileInfoTC}/>
            </div>
        </div>
    );
};



