import { FaHome } from "react-icons/fa"
import AppLayout from "../../ui/AppLayout"
import AppSidebar from "../../ui/AppSidebar"
import CustomNavLink from "../../ui/CustomNavLink"
import { FaCheckToSlot } from "react-icons/fa6"
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { LuUserPen } from "react-icons/lu";
import Modal from "../../ui/Modal"
import EditProfile from "./EditProfile"
import { useState } from "react"
import useUser from "../authentication/useUser"


function FreelancerLayout() {
    const {user} = useUser();
    const [open, setOpen] = useState(false);
  return (
    <AppLayout>
        <AppSidebar>
            <li>
                <CustomNavLink to="dashboard">
                <FaHome />داشبورد
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

export default FreelancerLayout
