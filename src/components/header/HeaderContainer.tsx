import "./header.css";
import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthMeTC, setAuthUserDataAC, setAvatarCurrentUserDataType} from "../../redux/auth-reducer/auth-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";
import {PhotosProfileType} from "../../redux/profile-reducer/profile-reducer";
import {useParams} from "react-router-dom";

//протипизировать get-запросы

export type HeaderPropsContainerType = MapStateToPropsType & MapDispatchToProps & { id?: string }

class HeaderContainer extends React.Component<HeaderPropsContainerType> {

    componentDidMount() {
        this.props.getAuthMeTC();
    }

    render() {
        return <Header {...this.props}/>
    }
};


type MapDispatchToProps = {
    setAuthUserData: (email: string, id: number, login: string) => void
    setAvatarCurrentUserDataType: (currentAvatars: PhotosProfileType) => void
    getAuthMeTC: () => void
}
type MapStateToPropsType = {
    login: string | null,
    isAuth: boolean,
    avatarCurrenUser: PhotosProfileType
    userId: number | null
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatarCurrenUser: state.auth.avatarCurrenUser,
        userId: state.auth.id
    }
}


const WithParams = (props: HeaderPropsContainerType) => {
    const {userId} = useParams<{ userId?: string }>()
    return <HeaderContainer id={userId} {...props} />
}

export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC,
    setAvatarCurrentUserDataType,
    getAuthMeTC
})(WithParams)