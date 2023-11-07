import React from 'react';
import './profileInfo.css'

const ProfileInfo = () => {
    return (
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
    );
};

export default ProfileInfo;