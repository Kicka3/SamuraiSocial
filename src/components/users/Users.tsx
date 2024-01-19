import React from "react";
import {UsersPageTop} from "./UsersPageTop";
import noUserAvatar from "../../assets/images/avatars/noAvatar.jpeg";
import {InitialUsersStateType} from "../../redux/users-reducer/users-reducer";
import {NavLink} from "react-router-dom";


type UsersType = {
    users: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export const Users: React.FC<UsersType> = (props) => {

    //Рассчитываю кол-во страниц
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return <>
        <UsersPageTop/>

        <div className={"usersPage"}>
            <div className="usersTitleWrapper">
                <div className={"usersTitle"}>Users:</div>
            </div>

            <nav className={'pagination-wrapper'}>
                <ul className={'pagination'}>
                    <span className={'prev-btn'}>«</span>
                    <div className={'page-number-wrapper'}>
                        {pages.map((pg) => {
                            return (<li
                                        className={props.currentPage === pg ? `selected-page` : 'page-number'}
                                        onClick={(e) => {
                                            props.onPageChanged(pg);
                                        }}>{pg}</li>
                            );
                        })}
                    </div>
                    <span className={'next-btn'}>»</span>
                </ul>
            </nav>

            <div className={'usersListWrapper'}>

                {props.users.users.map(el => (
                    <div className={'users_wrapper'} key={el.id}>

                        <div className="users_list">
                            <div className="users_img_Container">
                                <NavLink to={'/profile/' + el.id}>
                                    <img className="user_img"
                                        // src={AvatarForChatOnline}
                                         src={el.photos.small !== null ? el.photos.small : noUserAvatar}
                                         alt={"avatarUsersInChat"}/>
                                </NavLink>
                                <div className="user_online_badge"></div>
                            </div>

                            <div className="user_info">
                                <div className="user_info__item">
                                             <span className="user_info_value">
                                                <span className={'user_info_value__name'}>{el.name}</span>
                                            </span>
                                </div>

                                <div className="user_info__item">
                                        <span className="user_info_key">
                                            <span className="user_info_key__city">City: </span>
                                        </span>
                                    <span className="user_info_value">
                                            <span className="user_info_key__city">{'el.location.city'}</span>
                                        </span>
                                </div>

                                <div className="user_info__item">
                                        <span className="user_info_key">
                                            <span className="user_info_key__city">From:  </span>
                                        </span>
                                    <span className="rightbar_info_value">
                                           <span className="user_info_key__city">{'el.location.country'}</span>
                                    </span>
                                </div>

                                <div className="user_info__item">
                                        <span className="user_info_value">
                                            <span className="user_info__status">{el.status}</span>
                                        </span>
                                </div>

                            </div>

                        </div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unFollow(el.id)
                            }} className={'user_btn'}>unfollow
                            </button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }} className={'user_btn'}>follow
                            </button>
                        }

                    </div>
                ))}
            </div>

        </div>
    </>
}


