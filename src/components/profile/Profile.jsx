import "./profile.css";
import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";



function Profile () {
   return (
      <div className="ProfileWrapper">
         <div className="profile">

            <Sidebar/>

            <div className="profileRight">
               <div className="profileRightTop">
                  <div className="pfrofileCover">
                     <img className="profileCoverImg" src={"assets/person/Cover/cover1.jpeg"} alt="coverImg"/>
                     <img className="profileUserImg" src={'assets/person/person2.jpeg'} alt={"UserImage"}/>
                  </div>
                  <div className="profileInfo">
                     <h4 className="profileInfoName">Diana</h4>
                     <span className="profileInfoDesc">Farbazova</span>
                  </div>
               </div>

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
