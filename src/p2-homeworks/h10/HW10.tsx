import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preloader from "./preloader.gif"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store"
import {loadingAC} from "./bll/loadingReducer"

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <h4>homeworks 10:</h4>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} alt="preloader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
