import React from 'react'
import {Slider} from "@material-ui/core";
import s from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: [number, number]
    min?: number
    max?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        min, max, value
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue);
    };

    return (
        <>
            <Slider
                value={value}
                min={min}
                max={max}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                className={s.doubleRange}
                color={'secondary'}
            />
        </>
    )
}

export default SuperDoubleRange
