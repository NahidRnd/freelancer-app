import { FaHome } from "react-icons/fa"
import AppLayout from "../../ui/AppLayout"
import AppSidebar from "../../ui/AppSidebar"
import CustomNavLink from "../../ui/CustomNavLink"
import { FaCheckToSlot } from "react-icons/fa6"
import { LuUserPen } from "react-icons/lu";
import Modal from "../../ui/Modal"
import { useState } from "react"
import useUser from "../authentication/useUser"
import EditProfile from "../freelancer/EditProfile"

function OwnerLayout() {
  const {user} = useUser();
  const [open, setOpen] = useState(false);
  return (
    <AppLayout>
        <AppSidebar>
          <li>
            <CustomNavLink to="/owner/dashboard">
            <FaHome className="w-5 h-5" />داشبورد
            </CustomNavLink> 
          </li>
          <li>
            <CustomNavLink to="/owner/projects">
              <FaCheckToSlot className="w-5 h-5" />
              پروژه ها
            </CustomNavLink>
          </li>
          <li>
            <div onClick={()=>setOpen(true)} className="flex items-center gap-x-4 hover:bg-gradient-to-r from-btnP to-btnS hover:text-bgT py-4 px-3 ml-3 mr-2 rounded-lg transition-all duration-300 cursor-pointer">
            <LuUserPen />
              ویرایش اطلاعات کاربری
            </div> 
            <Modal open={open} onClose={()=>setOpen(false)} title={`ویرایش مشخصات کاربری ${user.name}`}>
                <EditProfile />
            </Modal>
          </li>
        </AppSidebar>
    </AppLayout>
  )
}

export default OwnerLayout
