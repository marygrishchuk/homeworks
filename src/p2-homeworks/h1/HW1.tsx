import React from "react";
import Message from "./Message";
import image from "./imageArtem.jpg"

const messageData = {
    avatar: `${image}`,
    name: "Artem",
    message: "npm start нажимал?",
    time: "20:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            <h4>homework 1:</h4>

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
