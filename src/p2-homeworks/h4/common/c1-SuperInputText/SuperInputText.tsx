import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from "./SuperInputText.module.css";

// standard input props type:
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// Here we point out that our input will have the same props as those of a standard input.
// (value: string, onChange: ... are not necessary since they are described in DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // + more props that are not contained in a standard input
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
};

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, //
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps// 'restProps' object containing all the remaining props
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // if there is 'onChange' props
        && onChange(e); // then it gets 'е' (because 'onChange' is not mandatory)

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // if 'Enter' key is pressed
        && onEnter // and if there is 'onEnter' props
        && onEnter(); // then 'onEnter' will be called
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = `${error ? s.errorInput : s.superInput}`;

    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // all the remaining props if there are any, including 'value'
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default SuperInputText;
