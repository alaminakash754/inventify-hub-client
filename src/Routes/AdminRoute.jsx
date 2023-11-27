import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import MotionSpring from "../components/ReactSpring/MotionSpring";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <MotionSpring></MotionSpring>
    }

    if(user && isAdmin){
        return children;
    }
    
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;