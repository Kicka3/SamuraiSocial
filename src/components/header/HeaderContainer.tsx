import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {
    getAuthUserDataTC,
    logoutTC,
    setAuthUserDataAC,
    setAvatarCurrentUserDataAC
} from "../../redux/auth-reducer/auth-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";
import {PhotosProfileType} from "../../redux/profile-reducer/profile-reducer";
import {useParams} from "react-router-dom";


export type HeaderPropsContainerType = MapStateToPropsType & MapDispatchToProps & { id?: string }

class HeaderContainer extends React.Component<HeaderPropsContainerType> {

    render() {
        return <Header {...this.props}/>
    }
}


type MapDispatchToProps = {
    setAuthUserData: (email: string | null, id: number | null, login: string | null, isAuth: boolean) => void
    setAvatarCurrentUserDataType: (currentAvatars: PhotosProfileType) => void
    logoutTC: () => void
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
    setAvatarCurrentUserDataType: setAvatarCurrentUserDataAC,
    getAuthUserDataTC,
    logoutTC
})(WithParams)