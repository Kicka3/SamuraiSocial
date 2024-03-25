import './onlineUsers.css'

//FAKE DATA

const OnlineUsers = () => {
   return (
      <div>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src={'https://img.freepik.com/free-photo/young-confident-blond-girl-with-long-natural-hair-cross-arms-chest-smiling-determined-standing-like-professional-standing-white-wall_176420-38704.jpg?w=1380&t=st=1711396439~exp=1711397039~hmac=8812de080d5e51527865cc71328c4d0e07121b967a876e53eea6a85056ede744'} alt="ProfileImg"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Nina Matushkina</span>
         </li>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src={'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1380&t=st=1711396520~exp=1711397120~hmac=50d4b6ec1ee7a25715f4e10e793b540c0ad7aac77493eda415b56f628447693c'} alt="ProfileImg"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Evgeny Bulichev</span>
         </li>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
               <img className="rightbarProfileImg" src={'https://img.freepik.com/free-photo/young-man-woman-holding-cups-coffee_273609-21081.jpg?w=1380&t=st=1711396536~exp=1711397136~hmac=7e8b177c1c7b1ff6d13ed2e9e219329bb9526635388d526a3dd5718c55bc1512'} alt="ProfileImg"/>
               <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Alexsandr Mironov</span>
         </li>
      </div>
   )
};

export default OnlineUsers;
