import React, {useState} from "react";
import {InitialUsersStateType} from "../../redux/users-reducer/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./user/User";

type UsersTypePropsType = {
    users: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: string[]
    onPageChanged: (pageNumber: number) => void
    followTC: (userId: string) => void
    unFollowTC: (userId: string) => void
    toggleFollowingProgress: (userId: string, isFetching: boolean) => void
}

export const Users: React.FC<UsersTypePropsType> = (props) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged, users,
        unFollowTC,
        followTC,
        followingInProgress,
        toggleFollowingProgress
    } = props;

    const unFollowClickHandler = (userId: string) => {
        unFollowTC(userId)
    }
    const followClickHandler = (userId: string) => {
        followTC(userId)
    }

    // Добавляем состояние для хранения текущего значения поиска
    const [searchValue, setSearchValue] = useState<string>("");

    // Обновляем значение поиска при изменении значения в input
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    // Фильтруем список пользователей на основе значения поиска
    const filteredUsers = users.users.filter(user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return <>
        <div className="usersMenu">
            <div className="usersTitle">Your dialogues:</div>
            <div className="usersMenuWrapper">
                <input className={"usersMenuInput"}
                       type="text"
                       placeholder={"Search for friends"}
                       value={searchValue} // Устанавливаем текущее значение поиска
                       onChange={onSearchChange} // Обновляем значение поиска при изменении значения в input
                />
            </div>
        </div>

        <div className={"usersPage"}>
            <div className="usersTitleWrapper">
                <div className={"usersTitle"}>Users:</div>
            </div>

            <Paginator onPageChanged={onPageChanged}
                       currentPage={currentPage}
                       pageSize={pageSize}
                       totalItemsCount={totalUsersCount}
            />

            <div className={'usersListWrapper'}>

                {filteredUsers.map(el => <User key={el.id}
                                               user={el}
                                               followingInProgress={followingInProgress}
                                               followTC={followClickHandler}
                                               unFollowTC={unFollowClickHandler}
                                               toggleFollowingProgress={toggleFollowingProgress}
                    />
                )}
            </div>

        </div>
    </>
}