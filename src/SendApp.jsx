import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router"


export const SendApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
