import {connect} from "react-redux";
import {Users} from "./Users";
import {RootReduxStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    InitialUsersStateType,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer/users-reducer";


export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
    users: InitialUsersStateType
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

