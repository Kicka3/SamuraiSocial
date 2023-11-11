import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfilePageType} from "../redux/state";



type ProfilePropsType = {
    state: ProfilePageType
}

function Profile(props: ProfilePropsType) {

    return (
        <div className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">
                        <MyPosts posts={props.state.postsData}/>
                        <Rightbar/> {/*/PROFILEINFO/*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
