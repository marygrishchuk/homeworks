import {Provider} from "react-redux";
import React from "react";
import {combineReducers, createStore} from 'redux'
import {loadingReducer} from "../p2-homeworks/h10/bll/loadingReducer";
import {themeReducer} from "../p2-homeworks/h12/bll/themeReducer";
import {AppStoreType} from "../p2-homeworks/h10/bll/store";

const rootReducer = combineReducers({
    loading: loadingReducer,
    themes: themeReducer
})

const initialState = {
    loading: {
        loading: false
    },
    themes: {
        theme: 'lightgreen'
    }
};

export const storyBookStore = createStore(rootReducer, initialState as AppStoreType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}