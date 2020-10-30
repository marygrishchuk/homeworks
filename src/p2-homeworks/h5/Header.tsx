import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css";

type HeaderType = {
    visible: boolean
}

function Header(props: HeaderType) {
    return (
        <div className={props.visible ? `${s.navbar} ${s.shown}` : `${s.navbar} ${s.hidden}`}>
            <div><NavLink to={PATH.PRE_JUNIOR}>Homeworks 1-4</NavLink></div>
            <div><NavLink to={PATH.PRE_JUNIOR_PLUS}>PreJunior+</NavLink></div>
            <div><NavLink to={PATH.EMPTY_PAGE}>Empty Page</NavLink></div>
        </div>
    );
}

export default Header;
