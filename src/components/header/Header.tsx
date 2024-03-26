import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
import {LogoutOutlined, SearchOutlined} from '@ant-design/icons';

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutTC: () => void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, logoutTC}) => {

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
                    <SearchOutlined className="search" style={{marginLeft: "16px", marginRight: "12px"}}/>
                    <input className="searchInput" placeholder="Search for friend, post, video" type="text"/>
                </div>
            </div>

            <div className="headerRight">
                <div className={'headerBtnWrapper'}>
                    {isAuth
                        ? <div className={'headerLogoutWrapper'}>
                             <LogoutOutlined />
                            <button className={'logoutBtn'} onClick={logoutClickHandler}>Log out</button>
                        </div>
                        : <div className={'headerLoginWrapper'}>
                            <div className={'loginBtn'}><NavLink to={`/login`}></NavLink></div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
};


