import "./header.css";
import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setAvatarCurrentUserDataType} from "../../redux/auth-reducer/auth-reducer";
import {RootReduxStoreType} from "../../redux/redux-store";
import {PhotosProfileType, ProfileResponseType} from "../../redux/profile-reducer/profile-reducer";
import {useParams} from "react-router-dom";

//протипизировать get-запросы

export type HeaderPropsContainerType = MapStateToPropsType & MapDispatchToProps & { id?: string }

class HeaderContainer extends React.Component<HeaderPropsContainerType> {

    componentDidMount() {
        let userId = this.props.id
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    const {email, id, login} = res.data.data;
                    this.props.setAuthUserData(email, id, login);
                }
                axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                    .then((userData) => {
                        const currentAvatars: PhotosProfileType = userData.data.photos
                        userId = res.data.data.id
                            this.props.setAvatarCurrentUserDataType(currentAvatars)
                    });
            })
            .catch((e) => {
                console.log('HeaderContainer Error ' + e)
            })

    }

    render() {
        return <Header {...this.props}/>
    }
};


type MapDispatchToProps = {
    setAuthUserData: (email: string, id: number, login: string) => void
    setAvatarCurrentUserDataType: (currentAvatars: PhotosProfileType) => void
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

export default connect(mapStateToProps, {setAuthUserData, setAvatarCurrentUserDataType})(WithParams)