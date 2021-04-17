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
                <NavLink to={PATH.PRE_JUNIOR} onClick={onDivClick}>Homeworks 1-4</NavLink>
                <NavLink to={PATH.PRE_JUNIOR_PLUS} onClick={onDivClick}>PreJunior+</NavLink>
                <NavLink to={PATH.EMPTY_PAGE} onClick={onDivClick}>Empty Page</NavLink>
                <NavLink to={PATH.HOMEWORK_6} onClick={onDivClick}>Homework 6</NavLink>
                <NavLink to={PATH.HOMEWORK_7} onClick={onDivClick}>Homework 7</NavLink>
                <NavLink to={PATH.HOMEWORK_8} onClick={onDivClick}>Homework 8</NavLink>
                <NavLink to={PATH.HOMEWORK_9} onClick={onDivClick}>Homework 9</NavLink>
            </div>
            <button className={s.btn} onClick={onDivClick}></button>
        </div>
    );
}

export default Header;
