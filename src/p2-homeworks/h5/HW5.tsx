import React, {useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";

type HeaderType = {
    visible: boolean
}

function HW5(props: HeaderType) {


    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header visible={props.visible}/>

            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
