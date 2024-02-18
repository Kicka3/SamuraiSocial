import "./profile.css";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileResponseType} from "../../redux/profile-reducer/profile-reducer";
import {RightBar} from "./rightbar/Rightbar";


type ProfilePropsType = {
    profile: ProfileResponseType | null,
    status: string
    updateUserStatusTC: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile,
                                                        status,
                                                        updateUserStatusTC}) => {


    return (
        <section className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo profile={profile} status={status} updateUserStatusTC={updateUserStatusTC}/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">

                        <MyPostsContainer/>
                        {/*/PROFILEINFO/*/}
                        <RightBar profile={profile}/>
                    </div>

                </div>
            </div>
        </section>
    );
}


