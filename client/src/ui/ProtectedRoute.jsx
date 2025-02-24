import { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";


function ProtectedRoute({children}) {

    const navigate = useNavigate();
    
    const {isAuthenticate, isAuthorised, isLoading, isVerified} = useAuthorized();
    
    useEffect(()=>{
        if(!isAuthenticate && !isLoading) navigate("/auth");
        if(!isVerified && !isLoading) navigate("/not-access", {replace: true});
        if(!isAuthorised && !isLoading) navigate("/not-access", {replace: true});
    },[isAuthenticate, isAuthorised, isLoading, navigate, isVerified]);

    if(isLoading) return <Loading />

    if(isAuthenticate && isAuthorised) return children;
}

export default ProtectedRoute
