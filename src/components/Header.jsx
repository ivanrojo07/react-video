import React, { Fragment } from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import user_icon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom';

import gravatar from '../utils/gravatar';

import { connect } from 'react-redux';
import { setLogoutRequest } from '../actions';

const Header = (props)=>{
    const {user,isLogin,isRegister} = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = ()=>{
        props.setLogoutRequest()
    }

    const headerClass = classNames('header',{
        isLogin,
        isRegister
    })

    return (
        <header className={headerClass}>
            <Link to="/" >
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={hasUser ? gravatar(user.email) : user_icon} alt={hasUser ? user.email : 'icono-usuario' } />
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser ?
                        (<Fragment><li><a href="/">{user.email}</a></li>
                        <li><a href="#" onClick={handleLogout}>Logout</a></li></Fragment>)
                        :
                        (<li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>)

                    }
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    setLogoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)