import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css";

function Header() {
    let [visible, setVisible] = useState<boolean>(false)

    const onDivClick = () => {
        setVisible(!visible)
    }

    return (
        <div className={s.header}>
            <div className={visible ? `${s.navbar} ${s.shown}` : `${s.navbar} ${s.hidden}`}>
                <NavLink to={PATH.PRE_JUNIOR} onClick={onDivClick}>PreJunior</NavLink>
                <NavLink to={PATH.PRE_JUNIOR_PLUS} onClick={onDivClick}>PreJunior+</NavLink>
                <NavLink to={PATH.EMPTY_PAGE} onClick={onDivClick}>Empty Page</NavLink>
                <NavLink to={PATH.JUNIOR} onClick={onDivClick}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} onClick={onDivClick}>Junior+</NavLink>
            </div>
            <button className={s.btn} onClick={onDivClick}>
            </button>
        </div>
    );
}

export default Header;
