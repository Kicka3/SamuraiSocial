import React, {ChangeEvent} from 'react';
import {Preloader} from "../../common/preloaders/Preloader";
import imageLarge from '../../../assets/images/Cover/cover1.jpeg'
import noAvatar from '../../../assets/images/avatars/noAvatar.jpeg'
import {ProfileResponseType} from "../../../redux/profile-reducer/profile-reducer";
import {ProfileStatusWithHooks} from "../profileInfo/profileStatus/ProfileStatusWithHooks";
import {UploadOutlined} from "@ant-design/icons";

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    isOwner: boolean
    isUpdating: boolean
    updateUserStatusTC: (status: string) => void
    savePhotoTC: (userPhoto: File) => void
}

export const MainProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const {
        profile,
        status,
        updateUserStatusTC,
        isOwner,
        savePhotoTC,
        isUpdating
    } = props;

    const largePhoto = profile?.photos.large ? profile.photos.large : noAvatar;
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            savePhotoTC(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            <div>
                <img className="profileCoverImg"
                     src={imageLarge}
                     alt="coverImg"/>

                <div>
                    <img className="profileUserImg"
                         src={largePhoto}
                         alt="UserImage"
                    />
                    {isOwner &&
                       <div className={"inputWrapper"}>
                          <label htmlFor="file" className={"profileInfoOption"}>
                             <input className={"inputProfile"} type={"file"} onChange={onMainPhotoSelected}/>
                             <UploadOutlined />
                             <div className="uploadAvatar">
                                Сменить аватар
                             </div>
                          </label>

                       </div>
                    }
                </div>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{profile.fullName}</h4>

                <ProfileStatusWithHooks profileStatus={status}
                                        updateUserStatusTC={updateUserStatusTC}
                                        isUpdating={isUpdating}
                />

            </div>
        </div>
    );
};