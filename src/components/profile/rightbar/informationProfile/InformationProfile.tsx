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
                        <img className="rightbarFollowingImg" src={'https://img.freepik.com/free-photo/pretty-blonde-female-yellow-sweater_273609-4675.jpg?w=826&t=st=1711396907~exp=1711397507~hmac=535eb9b33c1ff0d0ecc547d2225042ab130e4ec899229ab6b1f4b7d707dc2350'} alt=""/>
                        <span className="rightbarFolliwingName">Anastasia Kozlova</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1380&t=st=1711396520~exp=1711397120~hmac=50d4b6ec1ee7a25715f4e10e793b540c0ad7aac77493eda415b56f628447693c'} alt=""/>
                        <span className="rightbarFolliwingName">Evgeny Bulichev</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'https://img.freepik.com/free-photo/side-view-woman-posing-chair_23-2149915943.jpg?size=626&ext=jpg&ga=GA1.1.860395895.1711396432&semt=sph'} alt=""/>
                        <span className="rightbarFolliwingName">Vasilisa Ampermetrova</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={'https://img.freepik.com/free-photo/attractive-stylish-hipster-man-walking-city-street-with-leather-bag-wearing-sweatshot-sunglasses-urban-style-trend-sunny-day_285396-4660.jpg?t=st=1711397006~exp=1711400606~hmac=ca736c1fd2bf57db9f68ddbaaf9e14ce5790ae7d2d49d92265445c017e8a3b4a&w=1380'} alt=""/>
                        <span className="rightbarFolliwingName">Pank Dots</span>
                    </div>
                </div>
            </div>


        </>
    );
};