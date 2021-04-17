import {initialPeopleType} from "../HW8";

export const homeWorkReducer = (state: initialPeopleType, action: any): initialPeopleType => {
    switch (action.type) {
        case "sort": {
            let stateCopy = [...state]
            if (action.payload === "up") stateCopy.sort((a, b) => (a.name > b.name) ? 1 : -1)
            if (action.payload === "down") stateCopy.sort((a, b) => (a.name > b.name) ? -1 : 1)
            return stateCopy
        }
        case "check-age": {
            let stateCopy = state.filter(p => p.age >= action.payload)
            return stateCopy
        }
        default:
            return state
    }
};