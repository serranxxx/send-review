import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { AppRoutes, PrivateRoutes } from "./"

export const AppRouter = () => {
  return (

    <>
        <Routes>
            <Route path="/send-review/login" element={ <LoginPage />} />
            <Route path="/send-review" element={ <LoginPage />} />
            <Route path="/send-review*" element={ <AppRoutes /> } />
              
        </Routes>
    </>
    
  )
}
