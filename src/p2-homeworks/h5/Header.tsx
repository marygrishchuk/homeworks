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
                <button onClick={onDivClick}><NavLink to={PATH.PRE_JUNIOR}>Homeworks 1-4</NavLink></button>
                <button onClick={onDivClick}><NavLink to={PATH.PRE_JUNIOR_PLUS}>PreJunior+</NavLink></button>
                <button onClick={onDivClick}><NavLink to={PATH.EMPTY_PAGE}>Empty Page</NavLink></button>
                <button onClick={onDivClick}><NavLink to={PATH.HOMEWORK_6}>Homework 6</NavLink></button>
                <button onClick={onDivClick}><NavLink to={PATH.HOMEWORK_7}>Homework 7</NavLink></button>
            </div>
            <button className={s.btn} onClick={onDivClick}></button>
        </div>
    );
}

export default Header;
