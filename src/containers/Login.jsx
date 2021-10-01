import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import google_icon from '../assets/static/google-icon.png';
import twitter_icon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss'

import { loginRequest } from "../actions";
import Header from "../components/Header";

const Login = (props)=>{
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember,setRemember] = useState(false)
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        console.log({email,password,remember})
        props.loginRequest({email,password,remember})
        props.history.push('/')
    }
    return (
        <Fragment >
            <Header isLogin={true} />
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmitForm}>
                        <input className="input" type="text" placeholder="Correo" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input className="input" type="password" placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" checked={remember} onClick={e=>setRemember(!remember)} />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={google_icon} /> Inicia sesión con Google</div>
                        <div><img src={twitter_icon} /> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
                </section>
            </section>
        </Fragment>
    )
}

const mapDispatchToProps={
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);