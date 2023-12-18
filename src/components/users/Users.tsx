import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import AvatarForChatOnline from "../../public/assets/person/person0.jpeg";
import "./usersMenu.css"
import {UsersPageTop} from "./UsersPageTop";
import {v1} from "uuid";


export const Users = (props: UsersPropsType) => {

    if (props.users.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: '../../public/assets/person/person0.jpeg',
                followed: false, fullName: 'Kirych', status: 'Ama lolos and we going to job, again again again again again',
                location: {
                    city: 'EKB',
                    country: 'Russia',
                }
            },
            {
                id: v1(),
                photoUrl: '../../public/assets/person/person0.jpeg',
                followed: true, fullName: 'Dianych', status: 'I am on elephant yaaay!',
                location: {
                    city: 'EKB',
                    country: 'Russia',
                }
            },
            {
                id: v1(),
                photoUrl: '../../public/assets/person/person0.jpeg',
                followed: false, fullName: 'Evgeny', status: 'Lived in colhozee',
                location: {
                    city: 'Moscow',
                    country: 'Russia',
                }
            },
        ]);
    }

//Когда фолловишься, должена появляться зеленая галочка на аватарке, а если отписываешься, то красный крестик
    return (
        <>
            <UsersPageTop/>

            <div className={"usersPage"}>
                <div className="usersTitleWrapper">
                    <div className={"usersTitle"}>Users:</div>
                </div>


                <div className={'usersListWrapper'}>
                    {props.users.users.map(el => (
                        <div className={'users_wrapper'} key={el.id}>

                            <div className="users_list">
                                <div className="users_img_Container">
                                    <img className="user_img"
                                         src={AvatarForChatOnline}
                                         alt={"avatarUsersInChat"}/>
                                    <div className="user_online_badge"></div>
                                </div>

                                <div className="user_info">
                                    <div className="user_info__item">
                                             <span className="user_info_value">
                                                <span className={'user_info_value__name'}>{el.fullName}</span>
                                            </span>
                                    </div>

                                    <div className="user_info__item">
                                        <span className="user_info_key">
                                            <span className="user_info_key__city">City: </span>
                                        </span>
                                        <span className="user_info_value">
                                            <span className="user_info_key__city">{el.location.city}</span>
                                        </span>
                                    </div>

                                    <div className="user_info__item">
                                        <span className="user_info_key">
                                            <span className="user_info_key__city">From:  </span>
                                        </span>
                                        <span className="rightbar_info_value">
                                           <span className="user_info_key__city">{el.location.country}</span>
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
                                }} className={'user_btn'}>follow
                                </button>
                                : <button onClick={() => {
                                    props.follow(el.id)
                                }} className={'user_btn'}>unfollow
                                </button>
                            }

                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};


