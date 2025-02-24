import { Outlet, useLocation } from "react-router-dom"
import AppHeader from "./AppHeader"
import DashboardHeader from "./DashboardHeader"
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function AppLayout({children}) {
  const location = useLocation();
  console.log("location", location);

  const [click, setClick] = useState(false);
  
  return (
    <div>
      <div className="sm:block hidden">
        <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[20rem_1fr]">
            <AppHeader />
            {children}
            <div className="bg-bgG">
              {location.pathname.includes('dashboard') && <DashboardHeader />}
              {location.pathname.includes('dashboard') ? (
                <Outlet />
              ) : (
              <div className="p-8 overflow-y-auto max-w-screen-xl bg-bgT text-textT m-12 rounded-md shadow-sm">
                  <Outlet />
              </div>
              )}
            </div>  
        </div>
      </div>
    <div className="sm:hidden block bg-bgG">
      <div className="flex items-center justify-between bg-bgT">
          <div className="pr-6">
            { click ?
                <IoClose size={24} onClick={()=>setClick(!click) } />
                : 
                <FiMenu size={24} onClick={()=>setClick(!click) } />
            }
          </div>
          <AppHeader />
          {
            click &&
            <div className="absolute top-14">
              {children}
            </div>
          }
      </div>
        <div className="bg-bgG h-full min-h-screen ">
          {location.pathname.includes('dashboard') && <DashboardHeader />}
          {location.pathname.includes('dashboard') ? (
            <Outlet />
          ) : (
          <div className="p-8 overflow-y-auto max-w-screen-xl bg-bgT text-textT sm:m-12 m-6 rounded-md shadow-sm">
              <Outlet />
          </div>
          )}
        </div>  
    </div>

    </div>
    
  )
}

export default AppLayout
