import { Outlet } from "react-router-dom"
import  Navbar from "../components/Navbar"
import Create from "../pages/Create"
import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile"






export default function RootLayout() {
  return (
    <div>
      
      <Navbar />
      <Dashboard />
      <Create />
      <Profile />
      <Outlet />
      
      
    </div>
  )
}
