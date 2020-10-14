import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// standard button props type, including 'children' props which stores the button name
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// 'restProps' object containing all the remaining props including 'children'
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps} // all the remaining props if there are any, including 'children'
        />
    );
}

export default SuperButton;
