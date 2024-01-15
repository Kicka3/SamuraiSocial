import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import "./usersMenu.css"
import {UsersPageTop} from "./UsersPageTop";
import axios from "axios";
import noUserAvatar from '../../assets/images/avatars/noAvatar.jpeg'

class UsersС extends React.Component {
    constructor(props) {
        super(props);

        const getUsers = () => {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((res) => {
                    props.setUsers(res.data.items)
                });
        }
    }

    render() {
        return (
            <>
                <UsersPageTop/>

                <div className={"usersPage"}>
                    <div className="usersTitleWrapper">
                        <div className={"usersTitle"}>Users:</div>
                    </div>


                    <div className={'usersListWrapper'}>
                        {this.props.users.users.map(el => (
                            <div className={'users_wrapper'} key={el.id}>

                                <div className="users_list">
                                    <div className="users_img_Container">
                                        <img className="user_img"
                                            // src={AvatarForChatOnline}
                                             src={el.photos.small !== null ? el.photos.small : noUserAvatar}
                                             alt={"avatarUsersInChat"}/>
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
                                        this.props.unFollow(el.id)
                                    }} className={'user_btn'}>follow
                                    </button>
                                    : <button onClick={() => {
                                        this.props.follow(el.id)
                                    }} className={'user_btn'}>unfollow
                                    </button>
                                }

                            </div>
                        ))}
                    </div>

                </div>
            </>
        );
    }
}

export default UsersС;