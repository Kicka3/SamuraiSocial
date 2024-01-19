import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    PhotosProfileType,
    ProfileResponseType,
    setUserProfile
} from "../../redux/profile-reducer/profile-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";


class ProfileContainer extends React.Component<ProfilePropsContainerType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            });
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        );
    }

}

export type ProfilePropsContainerType = MapStateToPropsType & MapDispatchToProps

type MapDispatchToProps = {
    setUserProfile: (profileUserId: number) => void
}
type MapStateToPropsType = {
    profile: ProfileResponseType
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
