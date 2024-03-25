import React from "react";
import noUserAvatar from "../../../assets/images/avatars/noAvatar.jpeg";
import {NavLink} from "react-router-dom";
import {ResponseUsersType} from "../../../redux/users-reducer/users-reducer";


type UsersTypePropsType = {
    user: ResponseUsersType
    followingInProgress: string[]
    followTC: (userId: string) => void
    unFollowTC: (userId: string) => void
    toggleFollowingProgress: (userId: string, isFetching: boolean) => void
}

export const User: React.FC<UsersTypePropsType> = ({
                                                       user,
                                                       unFollowTC,
                                                       followTC,
                                                       followingInProgress,
                                                   }) => {


    return <>
        <div className={'users_wrapper'} key={user.id}>

            <div className="users_list">
                <div className="users_img_Container">
                    <NavLink to={'/profile/' + user.id}>
                        <img className="user_img"
                             src={user.photos.small !== null ? user.photos.small : noUserAvatar}
                             alt={"avatarUsersInChat"}/>
                    </NavLink>
                    <div className="user_online_badge"></div>
                </div>

                <div className="user_info">
                    <NavLink to={'/profile/' + user.id}>
                        <div className="user_info__item">
                                             <span className="user_info_value">
                                                <span className={'user_info_value__name'}>{user.name}</span>
                                            </span>
                        </div>
                    </NavLink>

                    <div className="user_info__item">
                                        <span className="user_info_key">
                                            <span className="user_info_key__city">City: </span>
                                        </span>
                        <span className="user_info_value">
                                            <span className="user_info_key__city">{"INFO"}</span>
                                        </span>
                    </div>

                    <div className="user_info__item">
                                        <span className="user_info_key">
                                            <span className="user_info_key__city">From: </span>
                                        </span>
                        <span className="rightbar_info_value">
                                           <span className="user_info_key__city">{'some user location..'}</span>
                                    </span>
                    </div>

                    <div className="user_info__item">
                                    <span className="user_info_value">
                                        <span className="user_info__status">{user.status}</span>
                                    </span>
                    </div>

                </div>

            </div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => unFollowTC(user.id)}
                          className={'user_btn'}>unfollow
                    {/*}} className={!followingInProgress ? 'disabled_btn' : 'user_btn'}>{followingInProgress ? 'unfollow' : ''}*/}
                </button>

                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => followTC(user.id)}
                          className={'user_btn'}>follow
                    {/*}} className={!followingInProgress ? 'disabled_btn' : 'user_btn'}>follow*/}
                </button>
            }

        </div>
    </>
}


