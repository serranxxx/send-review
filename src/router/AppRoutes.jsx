import { Route, Routes } from "react-router-dom"
import { Layout } from "antd"
import useGetUser from "../Home/hooks/useGetUser"

import { ContentHome, SiderComp, FooterComp } from "../Home"
import { useEffect } from "react"


export const AppRoutes = () => {
    const theme = JSON.parse(localStorage.getItem('theme'))
    const user = useGetUser()

    useEffect(() => {
      const changeBody = () => {
        document.body.style.backgroundColor = `${theme? '#e3e3e3': '#333333'}`;
      }
    
     changeBody() 
    }, [theme])
    

    return (

        <div className="background-app"
            style={{
                transition: 'all 0.55s ease-in-out', borderBottomRightRadius: '1vw', borderTopLeftRadius: '1vw', borderRight: '2px solid #000', 
                borderTopRightRadius: '1vw', backgroundColor: `${(theme) ? '#f3f3f3' : '#333437'}`, borderLeft: '2px solid #000', borderBottomLeftRadius: '1vw'
            }}>
            <Layout style={{ minHeight: '100vh', backgroundColor: 'transparent' }} >
                {/* <SiderComp {...user} /> */}
                <Layout className="site-layout" style={{ backgroundColor: 'transparent' }}>
                    <Routes>
                        <Route path="home-page" element={<ContentHome />} />
                        
                    </Routes>
                    <FooterComp />
                </Layout>
            </Layout>


        </div>

    )
}
