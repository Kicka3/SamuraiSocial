import "./Sidebar.css"
import {NavLink} from "react-router-dom";
import {UserOutlined, CommentOutlined, NotificationOutlined, TeamOutlined, CloseOutlined} from '@ant-design/icons';

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <UserOutlined className={`${"sidebarIcon"}`}/>
                        <NavLink to={'/profile'} className="sidebarListItemText"
                                 activeClassName={'active'}>Profile</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        <CommentOutlined className={`${"sidebarIcon"}`} />
                        <NavLink to={'/dialogs'} className="sidebarListItemText">Messages</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        <NotificationOutlined className={`${"sidebarIcon"}`} />
                        <NavLink to={'/posts'} className="sidebarListItemText">News</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        <TeamOutlined className={`${"sidebarIcon"}`} />
                        <NavLink to={'/users'} className="XXXX">Find friends</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        <CloseOutlined className={`${"sidebarIcon"}`} />
                        <NavLink to={'/music'} className="sidebarListItemText">Music</NavLink>
                    </li>

                    <li className="sidebarListItem">
                        <CloseOutlined className={`${"sidebarIcon"}`} />
                        <NavLink to={'/settings'} className="sidebarListItemText">Settings</NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
