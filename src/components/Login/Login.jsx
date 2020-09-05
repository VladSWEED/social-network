import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import styles from "./../common/FormsControls/FormsControls.module.css";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

                {createField("Email","email",[required],Input)}
                {createField("Password","password",[required],Input,{type:"password"})}
                {createField(null,"rememberMe",[],Input,{type:"checkbox"})}

            {/*    <Field placeholder={"Email"} name={"email"}*/}
            {/*           validate={[required]}*/}
            {/*           component={Input}/>*/}
            {/*<div>*/}
            {/*    <Field placeholder={"Password"} name={"password"}*/}
            {/*           type={"password"}*/}
            {/*           validate={[required]}*/}
            {/*           component={Input}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field component={Input} name={"rememberMe"}*/}
            {/*           type={"checkbox"}/> remember me*/}
            {/*</div>*/}

            {props.error && <div className={styles.formSummeryError}>
               {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);