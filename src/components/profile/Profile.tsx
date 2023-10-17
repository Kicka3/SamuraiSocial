import "./profile.css";
import Feed from "../feed/Feed";
import Rightbar from "./rightbar/Rightbar";
import Sidebar from "./sidebar/Sidebar";
import React from "react";


function Profile() {
    return (
        <div className="ProfileWrapper">
            <div className="profile">

                <Sidebar/>

                {/*ПРОФИЛЬ*/}
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="pfrofileCover">
                            <img className="profileCoverImg"
                                 src={"assets/person/Cover/cover3.jpeg"}
                                 alt="coverImg"/>
                            <img className="profileUserImg"
                                 src={'assets/person/person0.jpeg'}
                                 alt="UserImage"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Kirill</h4>
                            <span className="profileStatus">I'm happy</span>
                        </div>
                    </div>
                    {/*ПОСТЫ В ПРОФИЛЕ*/}
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
