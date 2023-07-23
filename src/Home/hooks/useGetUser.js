import { useContext } from 'react'
import avatar from '../../assets/SVG/light-logo.svg'
import avatarDark from '../../assets/SVG/dark-logo.svg'
import loginAvatar from '../../assets/SVG/login-logo.svg'
import login2 from '../../assets/SVG/orange-login.svg'
// import gif from '../../assets/Rainbow.gif'
import { AuthContext } from '../../auth/context'

function useGetUser() {


    const avatarUrl = avatar
    const avatarDarkUrl = avatarDark
    const login = loginAvatar
    const loginSmall = login2


    return {
        login,
        loginSmall,
        avatarUrl,
        avatarDarkUrl
        } 
    
}

export default useGetUser;