import { Layout } from "antd"
import { useContext } from "react"
import { AuthContext } from "../../../auth"
const { Footer } = Layout

export const FooterComp = () => {

  // const { theme } = useContext( AuthContext )
  const theme = JSON.parse( localStorage.getItem('theme') )
  return (
    <Footer style={{ textAlign: 'center', borderTop: '2px solid #000', borderBottom: '2px solid #000',
          backgroundColor: `${(theme)? '#f3f3f3': '#2b2d31'}`, borderBottomRightRadius:'1vw', borderBottomLeftRadius: '1vw',
          color:`${(theme)? '#000': '#e3e3e3'}`, transition: 'all 0.55s ease-in-out',}}>
       QAT: Send and Review ©2023 Created by MAS DevOps
    </Footer>

  )
}
