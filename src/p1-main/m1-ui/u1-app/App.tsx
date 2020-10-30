import React, {useState} from "react";
import s from "./App.module.css";
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
    let [visible, setVisible] = useState<boolean>(false)

    const onDivClick = () => {
        setVisible(!visible)
    }

    return (
        <div className={s.App}>
            <button className={s.menuBtn} onClick={onDivClick}></button>
            <h3>React homeworks:</h3>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5 visible={visible}/>

        </div>
    );
}

export default App;
