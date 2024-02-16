import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserTC,
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
            this.props.getUserTC(userId)
        } catch (e) {
            console.log(e)
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
    getUserTC: (userId: string) => void
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

export default connect(mapStateToProps, {setUserProfile, getUserTC})(WitchUrlDataContainerComponent)
