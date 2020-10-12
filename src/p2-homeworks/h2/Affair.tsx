import React from "react";
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div>
            {props.affair.name}
            <span className={s.smallerFont}>(priority: {props.affair.priority})</span>
            <button className={s.removeBtn} onClick={deleteCallback}>x</button>
        </div>
    );
}

export default Affair;
