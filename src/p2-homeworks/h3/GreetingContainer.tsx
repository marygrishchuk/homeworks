import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = (props) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let newName = e.currentTarget.value
        setName(newName)
    }
    const onAddUserKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addUser(name)
        }
    }

    const addUser = (name: string) => {
        if (name.trim() !== "") {
            props.addUserCallback(name.trim())
            alert(`Hello ${name.trim()}!`)
            setName("")
        } else {
            setError("Username is required")
        }
    }

    const totalUsers = props.users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onAddUserKeyPress={onAddUserKeyPress}
        />
    );
}

export default GreetingContainer;
