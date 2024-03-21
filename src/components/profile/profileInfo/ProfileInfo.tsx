import React, {ChangeEvent} from 'react';
import {Preloader} from "../../common/preloaders/Preloader";
import imageLarge from '../../../assets/images/Cover/cover1.jpeg'
import noAvatar from '../../../assets/images/avatars/noAvatar.jpeg'
import {ProfileResponseType, savePhotoTC} from "../../../redux/profile-reducer/profile-reducer";
import {ProfileStatusWithHooks} from "../profileInfo/profileStatus/ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    isOwner: boolean
    updateUserStatusTC: (status: string) => void
    // savePhoto: (userPhoto: Blob) => void
    savePhotoTC: (userPhoto: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                status,
                                                                updateUserStatusTC,
                                                                isOwner,
                                                                savePhotoTC
                                                            }) => {

    const largePhoto = profile?.photos.large ? profile.photos.large : noAvatar;
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            console.log(e.currentTarget.files)
            savePhotoTC(e.currentTarget.files[0])
            // console.log(e.currentTarget.files[0])
        }
        // if (e.target.files) {
        //     const file = e.target.files[0];
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //         savePhoto(reader.result as string);
        //     };
        //     reader.readAsDataURL(file);
        //     console.log(file)
        // }
    }

    return (
        <div className="profileRightTop">
            <div className="pfrofileCover">
                <img className="profileCoverImg"
                     src={imageLarge}
                     alt="coverImg"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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