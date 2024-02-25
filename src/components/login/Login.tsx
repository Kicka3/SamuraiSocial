import React from "react";
import './login.css'
import loginImg from '../../assets/images/things/loginPage.png'
import {FormDataType, LoginReduxForm} from "../../../src/components/login/loginForm/LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer/auth-reducer";


type LoginPropsType = {}

const Login: React.FC<LoginPropsType> = (props) => {

    const emailRegExpLogin = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    function validationEmail(value: string) {
        let result = emailRegExpLogin.test(value);
        if (result) {
            //диспатчить санку LOGINTC

        } else {
            return false
        }

    }


    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
        validationEmail(formData.login);
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

                <LoginReduxForm onSubmit={onSubmit}/>

            </div>
        </section>
    )
};

type MapDispatchToProps = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

export default connect<MapDispatchToProps>(null, {loginTC})(Login)
