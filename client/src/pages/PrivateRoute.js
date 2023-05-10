import { useEffect, useState } from "react";
import useAuth from "../utils/useAuth";
import { LoginPage } from "./_index";

import Cookies from 'js-cookie'

const code = new URLSearchParams(window.location.search).get("code");

const PrivateRoute = ({ children }) => {
    const [accessToken, setAccessToken] = useState();

    const   accesCookie = Cookies.get('access_token'),
            refreshCookie = Cookies.get('refresh_token'),
            expiresCookie = Cookies.get('expires');

    const token = useAuth(code, accesCookie, refreshCookie, expiresCookie);

    useEffect(() => {
        if(!token) return;
        setAccessToken(token);
    }, [token])

    if (!accessToken && navigator.onLine) return <LoginPage />
    
    return  children 
};

export default PrivateRoute;