import "./rightbar.css";
import React from "react";
import "./rightbar.css";
import OnlineUsers from "../online/Online";

const ProfileBar = () => {
   const HomeRightbar = () => {
      return (
         <div className="HomeRightbarWrapper">
            <div className="birthdayContainer">
               <img className="birthdayImg" src={"assets/gift.png"} alt="birthdayImg"/>
               <span className="birthdayText">
            <b>Alexandr Mironov</b> <b>and 2 other friends</b> have a birthday today.
          </span>
            </div>
            <img className="rightbarAd" src={'assets/ad.png'} alt="rightbarAdImg"/>

            <div className="UserOnlineWrapper">
               <h4 className="rightbarTitle">Online Friends</h4>
               <ul className="rightbarFriendList">
                  <OnlineUsers/>
               </ul>
            </div>

         </div>
      )
   };

   const PfrofileRightbar = () => {
      return (
         <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
               <div className="rightbarInfo__item">
                  <span className="rightbar_info_key">City:</span>
                  <span className="rightbar_info_value">User city</span>
               </div>
               <div className="rightbarInfo__item">
                  <span className="rightbar_info_key">From:</span>
                  <span className="rightbar_info_value">User from</span>
               </div>
               <div className="rightbarInfo__item">
                  <span className="rightbar_info_key">Relationship:</span>
                  <span className="rightbar_info_value">user relationship</span>
               </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={"assets/person/Cover/cover1.jpeg"} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={"assets/person/Cover/cover1.jpeg"} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
            </div>
         </>
      );
   };

   return (
      <div className="rightbar">
         <div className="rightBarWrapper">
            <HomeRightbar/>
            <PfrofileRightbar/>
         </div>
      </div>
   );
};


export default ProfileBar;
