import "./profile.css";
import Feed from "../feed/Feed";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";


function Profile() {
    return (
        <div className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar/> {/*/PROFILEINFO/*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
