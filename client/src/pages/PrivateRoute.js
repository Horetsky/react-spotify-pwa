import { useSelector } from "react-redux";
import useAuth from "./helpers/useAuth";
import { LoginPage } from "./_index";

const code = new URLSearchParams(window.location.search).get("code");

const PrivateRoute = ({ children }) => {
    const { loginStatus } = useSelector(state => state.user)
    
    useAuth(code)

    if (!loginStatus) return <LoginPage />
    
    return  children 
};

export default PrivateRoute;