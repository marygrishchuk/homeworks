import React, {useState} from 'react';
import SuperEditableSpan from "../p2-homeworks/h6/common/c4-SuperEditableSpan/SuperEditableSpan";

export default {
    title: 'SuperEditableSpan Example',
    component: SuperEditableSpan
}

export const SuperEditableSpanExample = () => {
    const [value, setValue] = useState<string>("");

    return <SuperEditableSpan
        value={value}
        onChangeText={setValue}
        spanProps={{children: value ? undefined : "Enter your text here..."}}
    />
}