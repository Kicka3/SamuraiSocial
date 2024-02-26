import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
import {PhotosProfileType} from "../../redux/profile-reducer/profile-reducer";
import noUserAvatar from "../../assets/images/avatars/noAvatar.jpeg";


//Всё будет на ant-design!!!
// import PersonIcon from '@mui/icons-material/Person';
// import SearchIcon from '@mui/icons-material/Search';
// import ChatIcon from '@mui/icons-material/Chat';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import {Link} from "react-router-dom";
// import {useContext} from "react";
// import {AuthContext} from "../../context/AuthContext";
//У ДИМЫЧА ЧЕРЕЗ ANT-DESIGN!

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    avatarCurrenUser: PhotosProfileType
    logoutTC: () => void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, logoutTC, login, avatarCurrenUser}) => {
    const currentUserAvatar = avatarCurrenUser?.small ? avatarCurrenUser?.small : noUserAvatar;

    const logoutClickHandler = () => {
        logoutTC();
    }

    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <NavLink to="/" style={{textDecoration: "none"}}>
                    <span className="logo">Kickasocial</span>
                </NavLink>
            </div>
            <div className="headerCenter">
                <div className="searchbar">
                    {/*<img className={'headerUserImg'}*/}
                    {/*    // src={noUserAvatar}*/}
                    {/*     src={currentUserAvatar !== null ? currentUserAvatar : noUserAvatar}*/}
                    {/*     alt={currentUserAvatar}*/}
                    {/*/>*/}
                    {/*<SearchIcon className="search"/>*/}
                    {/*//Не спеши исправлять сдвиг!!!! Тут должна сидеть иконка!!!*/}
                    <input className="searchInput" placeholder="Search for friend, post, video" type="text"/>
                </div>
            </div>

            <div className="headerRight">
                {/*//Убрал из функциональности//*/}
                {/*<div className="headerLinks">*/}
                {/*    <span className="headerLink">Homepage</span>*/}
                {/*    <span className="headerLink">Timeline</span>*/}
                {/*</div>*/}
                {/*<div className="headerIcons">*/}
                {/*    <div className="headerIconItem">*/}
                {/*        /!*<PersonIcon/>*!/*/}
                {/*        <span className="headerIconBadge">1</span>*/}
                {/*    </div>*/}
                {/*    <div className="headerIconItem">*/}
                {/*        /!*<ChatIcon/>*!/*/}
                {/*        <span className="headerIconBadge">3</span>*/}
                {/*    </div>*/}
                {/*    <div className="headerIconItem">*/}
                {/*        /!*<CircleNotificationsIcon/>*!/*/}
                {/*        <span className="headerIconBadge">1</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<NavLink to={`/profilePage/${user.username}`}>*/}

                <div className={'headerBtnWrapper'}>
                    {isAuth
                        ? <div className={'headerLogoutWrapper'}>
                            <img className={'headerUserImg'}
                                 src={currentUserAvatar !== null ? currentUserAvatar : noUserAvatar}
                                 alt={currentUserAvatar}
                            />
                            <button className={'logoutBtn'} onClick={logoutClickHandler}>Log out</button>
                        </div>
                        : <div className={'headerLoginWrapper'}>
                            <NavLink to={`/login`}></NavLink>
                        </div>
                    }


                    {/*{isAuth ? login :*/}
                    {/*    <NavLink to={`/login`}>*/}
                    {/*        <div className={'headerImgWrapper'}>*/}
                    {/*            el.photos.small !== null ? el.photos.small : noUserAvatar*/}
                    {/*            <img className={'headerUserImg'}*/}
                    {/*                // src={currentUserAvatar !== null ? currentUserAvatar : noUserAvatar}*/}
                    {/*                 src={noUserAvatar}*/}
                    {/*                 alt={currentUserAvatar}*/}
                    {/*            />*/}
                    {/*            <div>login</div>*/}

                    {/*            /!*{isAuth*!/*/}
                    {/*            /!*    ? <div>login</div>*!/*/}
                    {/*            /!*    : <div>logout</div>*!/*/}
                    {/*            /!*}*!/*/}
                    {/*        </div>*/}
                    {/*    </NavLink>*/}
                    {/*}*/}

                </div>

            </div>
        </div>
    )
};


