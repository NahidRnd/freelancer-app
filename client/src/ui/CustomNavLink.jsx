import { NavLink } from "react-router-dom";

export default function CustomNavLink({children, to, onClick}){
    const navClass = "flex items-center gap-x-4 hover:bg-gradient-to-r from-btnP to-btnS hover:text-bgT py-4 px-3 ml-3 mr-2 rounded-lg transition-all duration-300"; 
    return  <NavLink 
              onClick={onClick}
                className={({isActive}) => isActive ? `${navClass} bg-gradient-to-r from-btnP to-btnS text-bgT` : navClass}
              to={to}>
              
              {children}
            </NavLink>
  }