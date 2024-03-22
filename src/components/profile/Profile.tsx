import "./profile.css";
import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileResponseType} from "../../redux/profile-reducer/profile-reducer";
import {RightBar} from "./rightbar/Rightbar";


type ProfilePropsType = {
    profile: ProfileResponseType | null,
    status: string
    isOwner: boolean
    updateUserStatusTC: (status: string) => void
    savePhotoTC: (userPhoto: File) => void
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        profile,
                                                        status,
                                                        updateUserStatusTC,
                                                        isOwner,
                                                        savePhotoTC
                                                    }) => {

    return (
        <section className="ProfileWrapper">
            <div className="profile">

                <div className="profileRight">

                    <ProfileInfo profile={profile}
                                 status={status}
                                 updateUserStatusTC={updateUserStatusTC}
                                 isOwner={isOwner}
                                 savePhotoTC={savePhotoTC}
                    />

                    <div className="profileRightBottom">
                        <MyPostsContainer/>
                        <RightBar profile={profile}/>
                    </div>

                </div>
            </div>
        </section>
    );
}


