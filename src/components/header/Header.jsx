import "./header.css";

//Всё будет на ant-design!!!
// import PersonIcon from '@mui/icons-material/Person';
// import SearchIcon from '@mui/icons-material/Search';
// import ChatIcon from '@mui/icons-material/Chat';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import {Link} from "react-router-dom";
// import {useContext} from "react";
// import {AuthContext} from "../../context/AuthContext";

//У ДИМЫЧА ЧЕРЕЗ ANT-DESIGN!
//У МЕНЯ ЧЕРЕЗ MUI

export default function Header() {
   return (
      <div className="headerContainer">
         <div className="headerLeft">
            {/*<Link to="/" style={{textDecoration: "none"}}>*/}
               <span className="logo">Kickasocial</span>
            {/*</Link>*/}
         </div>
         <div className="headerCenter">
            <div className="searchbar">

               {/*<SearchIcon className="search"/>*/}

               <input placeholder="Search for friend, post, video" type="text" className="searchInput"/>
            </div>
         </div>
         <div className="headerRight">
            <div className="headerLinks">
               <span className="headerLink">Homepage</span>
               <span className="headerLink">Timeline</span>
            </div>
            <div className="headerIcons">
               <div className="headerIconItem">
                  {/*<PersonIcon/>*/}
                  <span className="headerIconBadge">1</span>
               </div>
               <div className="headerIconItem">
                  {/*<ChatIcon/>*/}
                  <span className="headerIconBadge">3</span>
               </div>
               <div className="headerIconItem">
                  {/*<CircleNotificationsIcon/>*/}
                  <span className="headerIconBadge">1</span>
               </div>
            </div>
            {/*<Link to={`/profile/${user.username}`}>*/}
               <img src={""}/>
            {/*</Link>*/}
         </div>
      </div>
   )
};


