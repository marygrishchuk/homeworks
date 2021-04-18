import React from 'react';
import HW12 from "../p2-homeworks/h12/HW12";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'Homework 12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
}

export const Homework12 = () => <HW12/>