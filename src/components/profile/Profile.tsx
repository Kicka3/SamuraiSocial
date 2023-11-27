import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/MyPosts";
import {MainReducerType, ProfilePageType} from "../../redux/old-store-for-my-redux/my-old-store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: MainReducerType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    const {dispatch, profilePage} = props;

    return (
        <section className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">
                        <MyPosts posts={profilePage.postsData}
                                 newPostText={profilePage.newPostText}
                                 dispatch={dispatch}
                        />
                        <Rightbar/> {/*/PROFILEINFO/*/}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Profile;
