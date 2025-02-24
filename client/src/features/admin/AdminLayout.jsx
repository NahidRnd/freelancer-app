import { FaHome } from "react-icons/fa"
import AppLayout from "../../ui/AppLayout"
import AppSidebar from "../../ui/AppSidebar"
import CustomNavLink from "../../ui/CustomNavLink"
import { FaCheckToSlot, FaUser } from "react-icons/fa6"
import { LuGalleryVerticalEnd } from "react-icons/lu"


function AdminLayout() {
  return (
    <AppLayout>
        <AppSidebar>
            <li>
                <CustomNavLink to="dashboard">
                <FaHome />داشبورد
                </CustomNavLink> 
            </li>
            <li>
                <CustomNavLink to="users">
                    <FaUser/>
                    کاربران
                </CustomNavLink>
            </li>
            <li>
                <CustomNavLink to="projects">
                    <FaCheckToSlot />
                    پروژه ها
                </CustomNavLink>
            </li>
            <li>
                <CustomNavLink to="proposals">
                <LuGalleryVerticalEnd />
                درخواست ها
                </CustomNavLink> 
            </li>
        </AppSidebar>
    </AppLayout>
  )
}

export default AdminLayout
