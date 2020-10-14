import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onAddUserKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onAddUserKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "";

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onAddUserKeyPress} className={inputClass}/>
            <span className={`${s.someClass} ${s.errorMessage}`}>{error}</span>
            <button className={s.addBtn} onClick={() => addUser(name)}>Add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;