import "./Sidebar.css"
import {NavLink} from "react-router-dom";
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
        <nav className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        {/*<li className={`${"sidebarListItem"} ${"active"}`}>*/}
                        {/*<RssFeedIcon className="sidebarIcon" />*/}
                        <NavLink to={'/profile'} className="sidebarListItemText" activeClassName={'active'}>Profile</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        {/*<PlayCircleOutlineSharpIcon className="sidebarIcon" />*/}
                        <NavLink to={'/dialogs'} className="sidebarListItemText">Messages</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        {/*<ForumIcon className="sidebarIcon" />*/}
                        <NavLink to={'/myposts'} className="sidebarListItemText">News</NavLink>
                    </li>

                    {/*<li className="sidebarListItem">*/}
                    {/*   /!*<GroupsIcon className="sidebarIcon" />*!/*/}
                    {/*   <a href={'/friends'} className="sidebarListItemText">Friends</a>*/}
                    {/*</li>*/}

                    <li className="sidebarListItem">
                        {/*<BookmarksIcon className="sidebarIcon" />*/}
                        <NavLink to={'/music'} className="sidebarListItemText">Music</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        {/*<HelpOutlineIcon className="sidebarIcon" />*/}
                        <NavLink to={'/settings'} className="sidebarListItemText">Settings</NavLink>
                    </li>

                </ul>

                {/*<button className="sidebarBtn">Show More</button>*/}
                {/*<hr className="sidebarHr"/>*/}
                {/*<ul className="sidebarFrindList"></ul>*/}

            </div>
        </nav>
    )
}
