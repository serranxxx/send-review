import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { AppRoutes, PrivateRoutes } from "./"

export const AppRouter = () => {
  return (

    <>
        <Routes>
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/" element={ <LoginPage />} />
            <Route path="/*" element={ <AppRoutes /> } />
              
        </Routes>
    </>
    
  )
}
