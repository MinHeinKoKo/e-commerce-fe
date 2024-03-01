import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import SideBar from "../components/dashboard/SideBar"
import Navbar from "../components/dashboard/Navbar"

const AdminLayout = () => {
  const active = useSelector((state) => state.display.activeMenu);

  return (
    <div className="relative flex h-screen dark:bg-main_dark_bg font-montserrat">
        <div className="relative flex w-full h-auto overflow-hidden dark:bg-main_dark_bg bg-main_bg dark:text-white">
          {active ? (
            <div className="sticky bg-white w-72 dark:bg-secondary_dark_bg">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 bg-white dark:bg-secondary_dark_bg">
              <SideBar />
            </div>
          )}
          <div className="flex flex-col w-full bg-gray-200 dark:bg-gray-700 dark:text-white">
            <div
              className={`dark:bg-main_dark_bg bg-main_bg fixed md:static ${
                active ? "w-full" : "w-full flex-2"
              }`}
            >
              <div className="sticky bg-white dark:bg-main_dark_bg">
                <Navbar />
              </div>
            </div>
            <div className="h-full overflow-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminLayout