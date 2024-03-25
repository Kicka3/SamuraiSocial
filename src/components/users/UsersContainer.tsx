import {connect} from "react-redux";
import './usersMenu.css'
import {RootReduxStoreType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloaders/Preloader";
import {
    InitialUsersStateType,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    getUserTC,
    setUserTC, unfollowTC, followTC
} from "../../redux/users-reducer/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors/users-selectors";


//протипизировать запросы

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUserTC(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.setUserTC(pageNumber, pageSize);
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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
type mapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (userId: string, isFetching: boolean) => void
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
    getUserTC: (currentPage: number, pageSize: number) => void
    setUserTC: (pageNumber: number, pageSize: number) => void
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            followTC,
            unfollowTC,
            getUserTC,
            setUserTC,
            setCurrentPage: setCurrentPageAC,
            toggleFollowingProgress: toggleFollowingProgressAC,
        }
    ),
    // WithAuthRedirect //Это HOC для редиректа
)(UsersContainer)