import { Outlet } from "react-router-dom"
import AuthHeader from "../components/headers/AuthHeader"
const AuthLayout = () => {
  return (
    <div>
        <header>
            <AuthHeader/>
        </header>
        <Outlet/>
    </div>
  )
}
export default AuthLayout