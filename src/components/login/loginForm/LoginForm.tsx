import React from 'react';
import '../login.css'
import {Link} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/Input";
import {maxLength, minLength, required} from "../../../utils/validators/Valodators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength50 = maxLength(50);
const minLength6 = minLength(6);


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
                                    validate={[required, maxLength50]}
                                    component={Input}
                                />
                            </div>


                            <div className="input-box">
                                <Field
                                    type="password"
                                    name={'password'}
                                    placeholder="Enter your password"
                                    required
                                    validate={[required, maxLength50, minLength6]}
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