import "./profile.css";
import Rightbar from "./rightbar/Rightbar";
import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";


type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    // const {store} = props;  //юзаю CONTEXT без стора


    return (
        <section className="ProfileWrapper">
            <div className="profile">

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <ProfileInfo/>

                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">

                        <MyPostsContainer
                            // store={store}
                        />
                        <Rightbar/> {/*/PROFILEINFO/*/}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Profile;
