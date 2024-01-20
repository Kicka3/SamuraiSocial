import React from 'react';
import './profileInfo.css'
import {Preloader} from "../../common/preloader/Preloader";
import imageLarge from '../../../assets/images/Cover/cover1.jpeg'
import noAvatar from '../../../assets/images/avatars/noAvatar.jpeg'
import {ProfileResponseType} from "../../../redux/profile-reducer/profile-reducer";


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {

    const largePhoto =  profile?.photos.large ? profile.photos.large : noAvatar;
    const smallPhoto = profile?.photos.small ? profile?.photos.small : noAvatar;

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className="profileRightTop">
            <div className="pfrofileCover">
                <img className="profileCoverImg"
                     src={imageLarge}
                     alt="coverImg"/>
                <img className="profileUserImg"
                     src={largePhoto}

                     alt="UserImage"/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{profile.fullName}</h4>
                <span className="profileStatus">{profile.aboutMe}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;