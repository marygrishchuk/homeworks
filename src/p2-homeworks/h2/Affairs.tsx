import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // it works:)
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")};
    const setHigh = () => {props.setFilter("high")};
    const setMedium = () => {props.setFilter("medium")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div>

            {mappedAffairs}

            <button className={props.filter === "all" ? s.activeBtn : s.nonActiveBtn} onClick={setAll}>All</button>
            <button className={props.filter === "high" ? s.activeBtn : s.nonActiveBtn} onClick={setHigh}>High</button>
            <button className={props.filter === "medium" ? s.activeBtn : s.nonActiveBtn} onClick={setMedium}>Medium</button>
            <button className={props.filter === "low" ? s.activeBtn : s.nonActiveBtn} onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
