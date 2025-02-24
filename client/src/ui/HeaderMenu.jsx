import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import Logout from "../features/authentication/Logout"
import DarkModeToggle from "./DarkModeToggle"


function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center text-dark">
      <li className="flex">
        <Link to="dashboard" >
            <FaUser />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  )
}

export default HeaderMenu
