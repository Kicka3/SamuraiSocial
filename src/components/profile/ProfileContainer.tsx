import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileTC,
    ProfileResponseType,
    setUserProfile
} from "../../redux/profile-reducer/profile-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../src/hoc/WithAuthRedirect";


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

        this.props.getUserProfileTC(userId);
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        );
    }

}


// type mapStateToPropsForRedirectType = {
//     profile: ProfileResponseType | null
// }
// const mapStateToPropsForRedirect = (state: RootReduxStoreType): MapStateToPropsType => {
//     return {
//         profile: state.profilePage.profile,
//     }
// };

type MapDispatchToProps = {
    setUserProfile: (profileData: ProfileResponseType) => void
    getUserProfileTC: (userId: string) => void
}
type MapStateToPropsType = {
    profile: ProfileResponseType | null
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
};


//HOCRedirect
// const AuthRedirectComponent = WithAuthRedirectComponent(Profile);

const WitchUrlDataContainerComponent = withRouter(ProfileContainer);

export default WithAuthRedirect(connect(mapStateToProps, {setUserProfile, getUserProfileTC})(WitchUrlDataContainerComponent));
