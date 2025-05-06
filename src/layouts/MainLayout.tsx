import { Outlet } from "react-router-dom"
import Headers from "../components/headers/Header"

const MainLayout = () => {
  return (
    <div>
      <header>
        <Headers/>
      </header>
      <Outlet/>
    </div>
  )
}
export default MainLayout