const initState = {
    theme: 'lightgreen'
};

type initStateType = {
    theme: string
}

export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "changeTheme": {
            return {
                ...state,
                theme: action.themeColor
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (themeColor: string): any => ({type: 'changeTheme', themeColor}); // fix any

type ActionType = ReturnType<typeof changeThemeAC>