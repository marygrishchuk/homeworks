import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://www.graycell.ru/picture/big/vanya2.jpg",
    name: "Artem",
    message: "npm start нажимал?",
    time: "20:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homework 1

            should work (должно работать) and works :)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
