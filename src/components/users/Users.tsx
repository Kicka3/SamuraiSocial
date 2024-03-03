import React from "react";
import {UsersPageTop} from "../../../src/components/users/usersPageTop/UsersPageTop";
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


    return <>
        <UsersPageTop/>

        <div className={"usersPage"}>
            <div className="usersTitleWrapper">
                <div className={"usersTitle"}>Users:</div>
            </div>

            <Paginator onPageChanged={onPageChanged}
                       currentPage={currentPage}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
            />

            <div className={'usersListWrapper'}>

                {users.users.map(el => <User key={el.id}
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


