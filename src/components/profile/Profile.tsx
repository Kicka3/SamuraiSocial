import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileResponseType} from "../../redux/profile-reducer/profile-reducer";


type ProfilePropsType = {
    profile: ProfileResponseType,

}

export const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    return (
        <section className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo profile={profile}/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">

                        <MyPostsContainer/>
                        {/*/PROFILEINFO/*/}
                        <Rightbar profile={profile}/>
                    </div>

                </div>
            </div>
        </section>
    );
}


