import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        
        case types.logut:
            return {
                logged: false
            }
        
        case types.lightTheme:
            return {
                ...state,
                theme: true
            }

        case types.DarkTheme:
            return {
                ...state,
                theme: false
            }

        case types.enlanguage:
            return {
                ...state,
                language: true
            }

        case types.eslanguage:
                return {
                    ...state,
                    language: false
                }
        
        case types.dailyGoal:
            return {
                ...state,
                goal: action.payload
            }

        default:
            return state
    }
} 