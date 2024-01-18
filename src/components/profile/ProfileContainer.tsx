import "./profile.css";
import React from "react";
import {Profile} from "./Profile";
import {UsersPropsType} from "../users/UsersContainer";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer/profile-reducer";


type ProfilePropsType = {}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {

            });
    }

    render() {
        debugger
        return (
            <Profile {...this.props}/>
        );
    }

}


type MapStateToPropsType = {

}
const mapStateToProps = (): MapStateToPropsType => {
    return {

    }
}

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)
