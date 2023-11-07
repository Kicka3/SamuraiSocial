import './onlineUsers.css'

const OnlineUsers = () => {
   return (
      <div>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src={'assets/person/person12.jpeg'} alt="ProfileImg"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Nina Matushkina</span>
         </li>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src={'assets/person/person9.jpeg'} alt="ProfileImg"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Evgeny Bulichev</span>
         </li>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src={'assets/person/person7.jpeg'} alt="ProfileImg"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Alexsandr Mironov</span>
         </li>
      </div>
   )
};

export default OnlineUsers;
