import React from 'react';
import '../login.css'
import {Link} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/Input";
import {maxLengthСreator, minLength, required} from "../../../utils/validators/Valodators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength50 = maxLengthСreator(50);
const maxLength16 = maxLengthСreator(16);


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <section className="forms">
            <div className="form-content">
                <div className="login-form">

                    <div className="title">Login</div>

                    <form onSubmit={props.handleSubmit}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <Field
                                    type="email"
                                    name={'login'}
                                    placeholder="Enter your email"
                                    required
                                    validate={[required, maxLength50, minLength]}
                                    component={Input}
                                />
                            </div>


                            <div className="input-box">
                                <Field
                                    type="password"
                                    name={'password'}
                                    placeholder="Enter your password"
                                    required
                                    validate={[required, maxLength16, minLength]}
                                    component={Input}
                                />
                            </div>


                            <div className={'text loginTextMiddle'}>
                                <div><a href="#">Forgot password?</a></div>
                                <div className={'rememberMe'}>
                                    <Field
                                        component={'input'}
                                        type={"checkbox"}
                                        name={'rememberMe'}
                                    />Remember me?
                                </div>
                            </div>

                            {props.error &&
                               <span className={'formSummaryError'}>
                                {props.error}
                                </span>
                            }
                            <div className="button input-box">
                                <button className="inputBtn"
                                        type="submit"
                                >Submit

                                    {/*   value="sumbit"{isFetching ?*/}
                                    {/*<CircularProgress color="secondary" size="15px"/> : "Submit"}*/}

                                </button>
                                {/*<input className="inputBtn" type="submit" value="sumbit"/>*/}
                            </div>


                            <div className="text signUpText">Don't have an account?
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