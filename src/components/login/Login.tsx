import './login.css'
import {Link} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import loginImg from '../../assets/images/things/loginPage.png'


export default function Login() {
    const email = useRef();
    const password = useRef();

    const valueForinp = 'заглушка'

    const handleClick = () => {
        console.log('click')
    };


    return (
        <div className='loginWrapper'>
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
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <form onSubmit={handleClick} action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope"></i>
                                        <input
                                            // ref={email}
                                            type="email"
                                            placeholder="Enter your email"
                                            required/>
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        <input
                                            type="password"
                                            // ref={password}
                                            // minLength="6"
                                            placeholder="Enter your password"
                                            required/>
                                    </div>
                                    <div className="text"><a href="#">Forgot password?</a></div>
                                    <div className="button input-box">

                                        <button className="inputBtn"
                                                type="submit"
                                                value={valueForinp}>Submit

                                              {/*   value="sumbit"{isFetching ?*/}
                                              {/*<CircularProgress color="secondary" size="15px"/> : "Submit"}*/}

                                        </button>
                                        {/*<input className="inputBtn" type="submit" value="sumbit"/>*/}

                                    </div>
                                    <div className="text sign-up-text">Don't have an account?
                                        <label>
                                            <Link to="/register" style={{textDecoration: "none"}}> Sigup now</Link>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>


                        {/*animation for registerPage*/}
                         {/*<div className="signup-form">*/}
                         {/*  <div className="title">Signup</div>*/}
                         {/*  <form action="#">*/}
                         {/*     <div className="input-boxes">*/}
                         {/*        <div className="input-box">*/}
                         {/*           <i className="fas fa-user"></i>*/}
                         {/*           <input type="text" placeholder="Enter your name" required />*/}
                         {/*        </div>*/}
                         {/*        <div className="input-box">*/}
                         {/*           <i className="fas fa-envelope"></i>*/}
                         {/*           <input type="text" placeholder="Enter your email" required />*/}
                         {/*        </div>*/}
                         {/*        <div className="input-box">*/}
                         {/*           <i className="fas fa-lock"></i>*/}
                         {/*           <input type="password" placeholder="Enter your password" required />*/}
                         {/*        </div>*/}
                         {/*        <div className="button input-box">*/}
                         {/*           <input type="submit" value="Sumbit" />*/}
                         {/*        </div>*/}
                         {/*        <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>*/}
                         {/*     </div>*/}
                           {/*</form>*/}
                        {/*</div>*/}


                    </div>
                </div>
            </div>
        </div>
    )
}
