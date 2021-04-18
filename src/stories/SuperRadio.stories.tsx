import React, {useState} from 'react';
import SuperRadio from "../p2-homeworks/h7/common/c6-SuperRadio/SuperRadio";

export default {
    title: 'SuperRadio Example',
    component: SuperRadio
}

export const SuperRadioExample = () => {
    const arr: string[] = ["Banana", "Orange", "Apple", "Mango"];
    const [value, onChangeOption] = useState<string>(arr[0]);

    return <SuperRadio
        name={"radio"}
        options={arr}
        value={value}
        onChangeOption={onChangeOption}
    />
}