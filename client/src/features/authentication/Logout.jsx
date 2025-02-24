import { MdOutlineLogout } from "react-icons/md";
import useLogout from "./useLogout";

function Logout() {
    const {isPending, logout} = useLogout();
  return (
    <button onClick={logout}>
      <MdOutlineLogout className="w-5 h-5 hover:text-red-700 cursor-pointer" />
    </button>
  )
}

export default Logout
