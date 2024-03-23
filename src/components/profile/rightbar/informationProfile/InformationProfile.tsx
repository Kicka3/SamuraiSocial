import React from 'react';
import "./profileRightBarStyles.css";
import '../friendsRightbar/homeRightBarStyles.css'
import {ProfileResponseType} from "../../../../redux/profile-reducer/profile-reducer";


type ProfileRightBarPropsType = {
    profile: ProfileResponseType | null,
}


export const InformationProfile: React.FC<ProfileRightBarPropsType> = ({profile}) => {
    return (
        <>
            <h4 className="rightbarTitle">User information:</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfo__item">
                    <span className="rightbar_info_key">Looking for a job:</span>
                    <span className="rightbar_info_value">{profile?.lookingForAJob ? 'true' : 'false'}</span>
                </div>
                <div className="rightbarInfo__item">
                    <span className="rightbar_info_key">Looking for a job description:</span>
                    <span className="rightbar_info_value">"{profile?.lookingForAJobDescription}"</span>
                </div>
                {/*<div className="rightbarInfo__item">*/}
                {/*    <span className="rightbar_info_key">Education:</span>*/}
                {/*    <span className="rightbar_info_value">Master</span>*/}
                {/*</div>*/}
                {/*<div className="rightbarInfo__item">*/}
                {/*    <span className="rightbar_info_key">Relationship:</span>*/}
                {/*    <span className="rightbar_info_value">user relationship</span>*/}
                {/*</div>*/}
            </div>

            <h4 className="rightbarTitle">User Friends</h4>
            <div>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'assets/person/person10.jpeg'} alt=""/>
                        <span className="rightbarFolliwingName">Anastasia Kozlova</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'assets/person/person9.jpeg'} alt=""/>
                        <span className="rightbarFolliwingName">Evgeny Bulichev</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'assets/person/person1.jpeg'} alt=""/>
                        <span className="rightbarFolliwingName">Vasilisa Ampermetrova</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'assets/person/person8.jpeg'} alt=""/>
                        <span className="rightbarFolliwingName">Pank Dots</span>
                    </div>
                </div>
            </div>


        </>
    );
};