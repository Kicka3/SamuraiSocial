import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


type ProfilePropsType = {

}

export const Profile: React.FC<ProfilePropsType> = () => {

    return (
        <section className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">

                        <MyPostsContainer/>
                        {/*/PROFILEINFO/*/}
                        <Rightbar/>
                    </div>

                </div>
            </div>
        </section>
    );
}


