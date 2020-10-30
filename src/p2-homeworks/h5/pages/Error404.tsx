import React from "react";
import s from "./Error404.module.css";
import image from "./image.jpg";

function Error404() {
    return (
        <div className={s.error404}>
            <div>Error 404:</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <br/>
            <img src={image} />
        </div>
    );
}

export default Error404;
