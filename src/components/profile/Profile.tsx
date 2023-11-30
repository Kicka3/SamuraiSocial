import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {initialProfileStateType, MainProfileReducerType} from "../../redux/profile-reducer/profile-reducer";


type ProfilePropsType = {
    profilePage: initialProfileStateType
    dispatch: (action: MainProfileReducerType) => void
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
                        {/*<MyPostsContainer posts={profilePage.postsData}*/}
                        <MyPostsContainer posts={profilePage.postsData}
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
