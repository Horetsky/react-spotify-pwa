import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'

const clientId = process.env.REACT_APP_CLIET_ID;
const serverUrl = process.env.REACT_APP_SERVER_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

export default function useAuth (code, accesCookie, refreshCookie, expiresCookie) {
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [expiresIn, setExpiresIn] = useState(null);

    const currentTime = Date.parse(new Date())

    useEffect(() => {
      if (currentTime - expiresCookie < 3600000) {
        setAccessToken(accesCookie);
        setRefreshToken(refreshCookie);
        setExpiresIn(3600000 - (currentTime - expiresCookie))
      }
    }, [accesCookie, expiresCookie]);


    useEffect(() => {
      if (code) {
            axios
              .post(`${serverUrl}login`, {
                code, clientId, clientSecret, redirectUri
              })
              .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn * 10000)
                window.history.pushState({}, null, "/")
              })
              .catch((e) => {
                window.location = "/"
                console.log(e);
              })
        }
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
          refreshAccessToken(refreshToken)
          console.log('time refresh');
        }, expiresIn)
        return () => clearInterval(interval)
      }, [refreshToken, expiresIn])

      const refreshAccessToken = (refresh) => {
        if(!refresh) return
        console.log('refresh');
        axios
            .post(`${serverUrl}refresh`, {
              refresh, clientId, clientSecret, redirectUri
            })
            .then(res => {
              setAccessToken(res.data.accessToken)
              setExpiresIn(res.data.expiresIn)
              setRefreshToken(refresh)
            })
            .catch(() => {
              window.location = "/"
            })
      }

      useEffect(() => {
        if (!accessToken || !refreshToken) return;
        console.log('set access data');
        Cookies.set('access_token', accessToken, { expires: 1 })
        Cookies.set('refresh_token', refreshToken, { expires: 1 })
        Cookies.set('expires', currentTime, { expires: 1 })
        sessionStorage.setItem('access_token', accessToken);

      }, [accessToken, refreshToken])

    return accessToken
}
