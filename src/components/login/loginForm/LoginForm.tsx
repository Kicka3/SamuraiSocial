import React from 'react';
import '../login.css'
import {Link} from "react-router-dom";

export const LoginForm: React.FC = () => {

    const valueForinp = 'заглушка'

    const handleClick = () => {
        console.log('click')
    };


    return (
        <section className="forms">
            <div className="form-content">
                <div className="login-form">
                    <div className="title">Login</div>
                    <form onSubmit={handleClick} action="#">

                        <div className="input-boxes">
                            <div className="input-box">
                                <input
                                    // ref={email}
                                    type="email"
                                    placeholder="Enter your email"
                                    required/>
                            </div>


                            <div className="input-box">
                                <input
                                    type="password"
                                    // ref={password}
                                    // minLength="6"
                                    placeholder="Enter your password"
                                    required/>
                            </div>


                            <div className={'text login-text-middle'}>
                                <div><a href="#">Forgot password?</a></div>
                                <div>
                                    <input type={"checkbox"}/>Remember me?
                                </div>
                            </div>


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
            </div>
        </section>
    );
};

{/*animation for registerPage*/
}
{/*<div className="signup-form">*/
}
{/*  <div className="title">Signup</div>*/
}
{/*  <form action="#">*/
}
{/*     <div className="input-boxes">*/
}
{/*        <div className="input-box">*/
}
{/*           <i className="fas fa-user"></i>*/
}
{/*           <input type="text" placeholder="Enter your name" required />*/
}
{/*        </div>*/
}
{/*        <div className="input-box">*/
}
{/*           <i className="fas fa-envelope"></i>*/
}
{/*           <input type="text" placeholder="Enter your email" required />*/
}
{/*        </div>*/
}
{/*        <div className="input-box">*/
}
{/*           <i className="fas fa-lock"></i>*/
}
{/*           <input type="password" placeholder="Enter your password" required />*/
}
{/*        </div>*/
}
{/*        <div className="button input-box">*/
}
{/*           <input type="submit" value="Sumbit" />*/
}
{/*        </div>*/
}
{/*        <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>*/
}
{/*     </div>*/
}
{/*</form>*/
}
{/*</div>*/
}

