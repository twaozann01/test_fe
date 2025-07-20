import { Outlet } from "react-router-dom"
import Sidebar from "../shared/components/Sidebar/Sidebar"

const DashboardLayout = () => {
  return (
    <>
      <div className="container-profile">
        <Sidebar />
        {/* Main */}
        <div className="main-content">
          <main>
            <Outlet />
          </main>


        </div>
      </div>

    </>
  )
}

export default DashboardLayout
