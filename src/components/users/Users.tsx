import React from "react";
import {UsersPageTop} from "./UsersPageTop";
import noUserAvatar from "../../assets/images/avatars/noAvatar.jpeg";
import {InitialUsersStateType, toggleFollowingProgress} from "../../redux/users-reducer/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/API";


type UsersTypePropsType = {
    users: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: string[]
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    toggleFollowingProgress: (userId: string, isFetching: boolean) => void
}

export const Users: React.FC<UsersTypePropsType> = (props) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged, users,
        unFollow,
        follow,
        followingInProgress,
        toggleFollowingProgress
    } = props;

    //Рассчитываю кол-во страниц
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    //НЕ ДОДЕЛАНО!
    //кликаешь на last el + 5 к стейту//
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
                        {pages.map((pg, index) => {
                            return (<li key={index}
                                        className={currentPage === pg ? `selected-page` : 'page-number'}
                                        onClick={(e) => {
                                            onPageChanged(pg);
                                        }}>{pg}</li>
                            );
                        })}
                    </div>
                    <span className={'next-btn'}>»</span>
                </ul>
            </nav>

            <div className={'usersListWrapper'}>

                {users.users.map(el => (
                    <div className={'users_wrapper'} key={el.id}>

                        <div className="users_list">
                            <div className="users_img_Container">
                                <NavLink to={'/profile/' + el.id}>
                                    <img className="user_img"
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
                            ? <button disabled={followingInProgress.some(id => id === el.id)} onClick={() => {
                                toggleFollowingProgress(el.id, true);
                                usersAPI.unFollow(el.id)
                                    .then((res) => {
                                        if (res.data.resultCode === 0) {
                                            unFollow(el.id);
                                        }
                                        toggleFollowingProgress(el.id, false);
                                    })
                                    .catch(err => console.log(err));

                                // }} className={'user_btn'}>unfollow
                            }} className={!followingInProgress ? 'disabled_btn' : 'user_btn'}>unfollow
                            </button>

                            : <button disabled={followingInProgress.some(id => id === el.id)} onClick={() => {
                                toggleFollowingProgress(el.id, true);
                                usersAPI.follow(el.id)
                                    .then((res) => {
                                        if (res.data.resultCode === 0) {
                                            follow(el.id);
                                        }
                                        toggleFollowingProgress(el.id, false);
                                    })
                                    .catch(err => console.log(err));

                                // }} className={'user_btn'}>follow
                            }} className={!followingInProgress ? 'disabled_btn' : 'user_btn'}>follow
                            </button>
                        }

                    </div>
                ))}
            </div>

        </div>
    </>
}


