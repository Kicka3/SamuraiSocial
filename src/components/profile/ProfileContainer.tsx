import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileTC, getUserStatusTC,
    ProfileResponseType,
    setUserProfile, updateUserStatusTC
} from "../../redux/profile-reducer/profile-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


export type ProfilePropsContainerType = MapStateToPropsType & MapDispatchToProps

type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsContainerType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '30400';
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId)

    }


    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatusTC={this.props.updateUserStatusTC}
            />
        );
    }

}

type MapDispatchToProps = {
    setUserProfile: (profileData: ProfileResponseType) => void
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (status: string) => void
    updateUserStatusTC: (status: string) => void
}
type MapStateToPropsType = {
    profile: ProfileResponseType | null
    status: string
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC
    }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);