import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperCheckbox.module.css";

// standard input props type:
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children, // contains text which is typified in React.FC

        ...restProps// contains all the remaining props
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // if there is 'onChange'
        && onChange(e); // then it gets 'е' (because 'onChange' is not mandatory)

        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;

    return (
        <label>
            <input
                type={"checkbox"}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // 'restProps' object containing all the remaining props including "checked"
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // owing to the 'label' tag, clicking the span will place focus at the input
    );
}

export default SuperCheckbox;
