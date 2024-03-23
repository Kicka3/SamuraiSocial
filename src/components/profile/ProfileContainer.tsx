import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileTC, getUserStatusTC,
    ProfileResponseType, savePhotoTC,
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

    refreshProfile() {
        let userId = this.props.match.params.userId;
        let authUserId = this.props.authorizedUserId;

        if (!userId) {
            userId = authUserId ? authUserId.toString() : '';
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhotoTC={this.props.savePhotoTC}
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
    savePhotoTC: (userPhoto: File) => void
}
type MapStateToPropsType = {
    profile: ProfileResponseType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
};

export default compose<React.ComponentType>(connect(mapStateToProps,
    {
        setUserProfile,
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC,
        savePhotoTC,
    }
), withRouter)(ProfileContainer);