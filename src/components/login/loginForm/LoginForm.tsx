import React from 'react';
import '../login.css'
import {Link} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    const valueForinp = 'заглушка'


    return (
        <section className="forms">
            <div className="form-content">
                <div className="login-form">
                    <div className="title">Login</div>
                    <form onSubmit={props.handleSubmit}>

                        <div className="input-boxes">
                            <div className="input-box">
                                <Field
                                    name={'login'}
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    component={'input'}
                                />
                            </div>


                            <div className="input-box">
                                <Field
                                    type="password"
                                    name={'password'}
                                    placeholder="Enter your password"
                                    required
                                    component={'input'}
                                />
                            </div>


                            <div className={'text login-text-middle'}>
                                <div><a href="#">Forgot password?</a></div>
                                <div>
                                    <Field
                                        component={'input'}
                                        type={"checkbox"}
                                        name={'rememberMe'}
                                    />Remember me?
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

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);

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

