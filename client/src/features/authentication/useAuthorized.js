import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorized(){
    const {isLoading, user} = useUser();
    const {pathname} = useLocation();

    let isAuthorised = false;
    let isVerified = false;
    if(user && user.status === 2) isVerified = true;
    let isAuthenticate = false;
    if(user) isAuthenticate = true;

    const desiredRole = pathname.split("/").at(1);

    if(user && user.role === desiredRole.toUpperCase() ) {
        isAuthorised = true;

    }
    
//09151235555
    
    return {isAuthenticate, isAuthorised, isLoading, isVerified}
}