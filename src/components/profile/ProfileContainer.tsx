import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    ProfileResponseType,
    setUserProfile
} from "../../redux/profile-reducer/profile-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type ProfilePropsContainerType = MapStateToPropsType & MapDispatchToProps

type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsContainerType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        try {
            axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then((res) => {
                    this.props.setUserProfile(res.data)
                });
        } catch (e) {
            console.log(e + 'Error in get user')
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        );
    }

}


type MapDispatchToProps = {
    setUserProfile: (profileData: ProfileResponseType) => void
}
type MapStateToPropsType = {
    profile: ProfileResponseType | null
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
};

const WitchUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WitchUrlDataContainerComponent)
