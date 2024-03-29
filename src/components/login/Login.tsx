import React from "react";
import './login.css'
import loginImg from '../../assets/images/things/loginPage.png'
import {FormDataType, LoginReduxForm} from "../../../src/components/login/loginForm/LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootReduxStoreType} from "../../redux/redux-store";


type LoginContainerPropsType = MapDispatchToPropsType & MapStateToPropsType;

const emailRegExpLogin = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const Login: React.FC<LoginContainerPropsType> = ({loginTC, isAuth, captchaUrl}) => {

    function validationEmail(value: string, formData: FormDataType) {
        let result = emailRegExpLogin.test(value);
        if (result) {
            loginTC(formData.login, formData.password, formData.rememberMe, formData.captcha)
        } else {
            return false
        }
    }

    const onSubmit = (formData: FormDataType) => {
        validationEmail(formData.login, formData);
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <section className='loginWrapper'>
            <div className="container">
                <input type="checkbox" id="flip"/>
                <div className="cover">

                    <div className="front">
                        <img src={loginImg} alt=""/>
                        <div className="text">
                            <span className="text-1">Сonnect with your <br/>friends</span>
                            <span className="text-2">and discuss a cat's meme<br/> <b>on Kickasocial</b></span>
                        </div>
                    </div>

                    <div className="back">
                        <div className="text">
                            <span className="text-1">Complete miles of journey <br/> with one step</span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>

                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>

            </div>
        </section>
    )
};

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        captchaUrl: state.auth.captcha,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {loginTC})(Login);
