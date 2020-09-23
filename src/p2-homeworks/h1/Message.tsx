import React from "react";
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.messageData}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>
                    <span>
                        {props.message}
                    </span>
                    <span className={s.time}>
                    {props.time}
                </span>
                </div>
            </div>
        </div>
    );
}

export default Message;
