import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"
import { useReducer } from "react"

const init = () => {

    
    const user = JSON.parse(localStorage.getItem('user'))
    const theme = JSON.parse(localStorage.getItem('theme'))
    const language = JSON.parse(localStorage.getItem('language'))
    const goal = JSON.parse(localStorage.getItem('goal'))

    return {
        logged: !!user,
        user: user,
        theme: theme,
        language: language,
        goal: goal
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (username = '', Day_Off = '', Hub = '', Name = '', Profile_Picutre = '', Role = '', Team = '') => {
        const user = {
            username, Day_Off, Hub, Name, Profile_Picutre,
            Role, Team
        }
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))


        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout
        }

        if (localStorage.getItem('user')) {
            localStorage.removeItem('user')
            localStorage.removeItem('total-test')
            localStorage.removeItem('config')
            localStorage.removeItem('token')
            // localStorage.removeItem('goal')

        }

        dispatch(action)
    }

    const lightTheme = (light = true) => {
        const theme = light
        const action = {
            type: types.lightTheme,
            payload: theme
        }
        localStorage.setItem('theme', JSON.stringify(theme))
        dispatch(action)
    }

    const darkTheme = (dark = false) => {
        const theme = dark
        const action = {
            type: types.DarkTheme,
            payload: theme
        }
        localStorage.setItem('theme', JSON.stringify(theme))
        dispatch(action)
    }

    const enLanguage = (language = false) => {
        const lang = language
        const action = {
            type: types.enlanguage,
            payload: lang
        }
        localStorage.setItem('language', JSON.stringify(lang))
        dispatch(action)
    }

    const esLanguage = (language = true) => {
        const lang = language
        const action = {
            type: types.eslanguage,
            payload: lang
        }

        localStorage.setItem('language', JSON.stringify(lang))
        dispatch(action)
    }





    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,
            lightTheme,
            darkTheme,
            enLanguage,
            esLanguage,
        }}>
            {children}
        </AuthContext.Provider>

    )
}
