const initState = {
    loading: false
}

export type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "loading": {
            return {
                ...state,
                loading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: "loading", isLoading} as const) // fix any

type ActionType = ReturnType<typeof loadingAC>
