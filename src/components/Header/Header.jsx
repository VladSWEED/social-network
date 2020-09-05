import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://common.regnum.ru/pictures/news/2015-04/total_logo_reg-big.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}> Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;