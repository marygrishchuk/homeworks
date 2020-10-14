import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text.trim() !== "" ? "" : "Error";
    const showAlert = () => {
        if (error) {
            alert("Enter text...");
        } else {
            alert(text); // show text if there is no error
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked2(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            <h4>homework 4:</h4>

            <div className={s.column}>

                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={s.blue}
                    spanClassName={s.superSpan}
                />

                <SuperButton
                    red  // this props has boolean value, so it is not mandatory to assign 'true'
                    className={s.blue}
                    onClick={showAlert}
                >
                    Delete {/*the button name can be later found in 'children' props*/}
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Text
                    {/*this text can be later found in 'children' props*/}
                </SuperCheckbox>
                <SuperCheckbox checked={checked2} onChange={testOnChange}/>

                <hr/>
                {/*// for personal creativity:*/}
                {/*// <AlternativeSuperInputText/>*/}
                {/*// <AlternativeSuperButton/>*/}
                {/*// <AlternativeSuperCheckbox/>*/}
                {/*// <hr/>*/}
            </div>
        </div>
    );
}

export default HW4;
