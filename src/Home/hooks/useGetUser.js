import { useContext } from 'react'
import avatar from '../../assets/SVG/light-logo.svg'
import avatarDark from '../../assets/SVG/dark-logo.svg'
import loginAvatar from '../../assets/SVG/login-logo.svg'
// import gif from '../../assets/Rainbow.gif'
import { AuthContext } from '../../auth/context'

function useGetUser() {


    const avatarUrl = avatar
    const avatarDarkUrl = avatarDark
    const login = loginAvatar


    return {
        login,
        avatarUrl,
        avatarDarkUrl
        } 
    
}

export default useGetUser;