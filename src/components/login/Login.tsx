import './login.css'
import {Link} from "react-router-dom";
import {useRef} from "react";
import loginImg from '../../assets/images/things/loginPage.png'
import {LoginForm} from "../../../src/components/login/loginForm/LoginForm";


export default function Login() {


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

                <LoginForm/>

            </div>
        </section>
    )
};


