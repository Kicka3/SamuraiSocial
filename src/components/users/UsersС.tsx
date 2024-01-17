import React, {MouseEventHandler} from 'react';
import "./usersMenu.css"
import {UsersPageTop} from "./UsersPageTop";
import axios from "axios";
import noUserAvatar from '../../assets/images/avatars/noAvatar.jpeg'
import {UsersType} from "../../redux/users-reducer/users-reducer";
import {UsersPropsType} from "./UsersContainer";

class UsersС extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            });
    }


    render() {
        //Рассчитываю кол-во страниц
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i < pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return (
            <>
                <UsersPageTop/>

                <div className={"usersPage"}>
                    <div className="usersTitleWrapper">
                        <div className={"usersTitle"}>Users:</div>
                    </div>

                    <nav className={'pagination-wrapper'}>
                        <ul className={'pagination'}>
                            <li className={'prev-btn'}>«</li>
                            <li className={'page-number-wrapper'}>
                                {pages.map(pg => {
                                    return (<>
                                            <li
                                                className={this.props.currentPage === pg ? `selected-page` : 'page-number'}
                                                onClick={(e) => {
                                                    this.onPageChanged(pg);
                                                }}>{pg}</li>
                                        </>
                                    );
                                })}
                            </li>
                            <span className={'next-btn'}>»</span>
                        </ul>
                    </nav>


                    {/*<nav aria-label="pagination">*/}
                    {/*    <ul className="pagination">*/}
                    {/*        <li>    <a href=""><span aria-hidden="true">«</span></a>    </li>*/}
                    {/*        <li><a href=""><span className="visuallyhidden">page </span>1</a></li>*/}
                    {/*        <li><a href="" aria-current="page"><span className="visuallyhidden">page </span>2</a></li>*/}
                    {/*        <li><a href=""><span className="visuallyhidden">page </span>3</a></li>*/}
                    {/*        <li><a href=""><span className="visuallyhidden">page </span>4</a></li>*/}
                    {/*        <li><a href=""><span aria-hidden="true">»</span></a></li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}

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
                                    }} className={'user_btn'}>unfollow
                                    </button>
                                    : <button onClick={() => {
                                        this.props.follow(el.id)
                                    }} className={'user_btn'}>follow
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