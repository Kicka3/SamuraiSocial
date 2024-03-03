import React from 'react';
import {Preloader} from "../../common/preloaders/Preloader";
import imageLarge from '../../../assets/images/Cover/cover1.jpeg'
import noAvatar from '../../../assets/images/avatars/noAvatar.jpeg'
import {ProfileResponseType} from "../../../redux/profile-reducer/profile-reducer";
import {ProfileStatusWithHooks} from "../profileInfo/profileStatus/ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    updateUserStatusTC: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile,
                                                         status,
                                                         updateUserStatusTC}) => {

    const largePhoto = profile?.photos.large ? profile.photos.large : noAvatar;
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

                <ProfileStatusWithHooks profileStatus={status}
                               updateUserStatusTC={updateUserStatusTC}
                />

            </div>
        </div>
    );
};