import "./Sidebar.css"




// import RssFeedIcon from '@mui/icons-material/RssFeed';
// import ForumIcon from '@mui/icons-material/Forum';
// import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
// import GroupsIcon from '@mui/icons-material/Groups';
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import WorkIcon from '@mui/icons-material/Work';
// import EventIcon from '@mui/icons-material/Event';
// import SchoolIcon from '@mui/icons-material/School';
// import { Users } from "../../someData";


export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarWrapper">
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  {/*<RssFeedIcon className="sidebarIcon" />*/}
                  <span className="sidebarListItemText">Profile</span>
               </li>
               <li className="sidebarListItem">
                  {/*<ForumIcon className="sidebarIcon" />*/}
                  <span className="sidebarListItemText">News</span>
               </li>
               <li className="sidebarListItem">
                  {/*<PlayCircleOutlineSharpIcon className="sidebarIcon" />*/}
                  <span className="sidebarListItemText">Message</span>
               </li>
               <li className="sidebarListItem">
                  {/*<GroupsIcon className="sidebarIcon" />*/}
                  <span className="sidebarListItemText">Friends</span>
               </li>
               <li className="sidebarListItem">
                  {/*<BookmarksIcon className="sidebarIcon" />*/}
                  <span className="sidebarListItemText">Music</span>
               </li>
               <li className="sidebarListItem">
                  {/*<HelpOutlineIcon className="sidebarIcon" />*/}
                  <span className="sidebarListItemText">Settings</span>
               </li>
            </ul>

            {/*<button className="sidebarBtn">Show More</button>*/}
            {/*<hr className="sidebarHr"/>*/}
            {/*<ul className="sidebarFrindList"></ul>*/}

         </div>
      </div>
   )
}
