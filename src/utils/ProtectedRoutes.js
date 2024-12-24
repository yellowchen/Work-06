import { Navigate, Outlet } from "react-router-dom";
import { auth } from "src/config/firebase";

const ProtectedRoutes = () => {
    return auth?.currentUser?.displayName 
        ? <Outlet /> 
        : <Navigate to='/login' />;
}

export default ProtectedRoutes