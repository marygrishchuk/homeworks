import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'lightgreen', 'yellow', 'blue'];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme)

    const onChangeCallback = (selectedTheme: string) => {
        dispatch(changeThemeAC(selectedTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <h4>homeworks 12:</h4>
            </span>

            {/*should work (должно работать)*/}
            <SuperRadio
                name={"radio"}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
