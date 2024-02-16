import {connect} from "react-redux";
import './usersMenu.css'
import {RootReduxStoreType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    InitialUsersStateType,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    getUserTC,
    setUserTC, unfollowTC, followTC
} from "../../redux/users-reducer/users-reducer";


//протипизировать get-запросы

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setUserTC(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollowTC={this.props.unfollowTC}
                   followTC={this.props.followTC}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>

    }
}


type MapStateToPropsType = {
    users: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

type mapDispatchToPropsType = {
    //types for UI-component from container
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (userId: string, isFetching: boolean) => void

    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
    getUserTC: (currentPage: number, pageSize: number) => void
    setUserTC: (pageNumber: number, pageSize: number) => void
}

export default connect(mapStateToProps, {
    followTC,
    unfollowTC,
    getUserTC,
    setUserTC,
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
})(UsersContainer);

