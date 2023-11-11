import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/MyPosts";
import {postsDataType} from "../../index";



type ProfilePropsType = {
    postsData: postsDataType[]
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
                        <MyPosts postsData={props.postsData}/>
                        <Rightbar/> {/*/PROFILEINFO/*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
