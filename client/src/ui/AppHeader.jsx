import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser"
import HeaderMenu from "./HeaderMenu";


function AppHeader() {
    const {isLoading, user} = useUser();
    console.log("user:",user);
    
  return (
    <div className="bg-bgT text-textT sm:border border-brl items-center">
        <div className={`container xl:max-w-screen-2xl flex items-center justify-end ${isLoading? "blur-sm": ""}`}>
          <HeaderMenu />
          <UserAvatar />
        </div>
    </div>
  )
}

export default AppHeader
