import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'

import { useDispatch } from 'react-redux';
import { setUserLoginStatus } from './actions';

const clientId = process.env.REACT_APP_CLIET_ID;
const serverUrl = process.env.REACT_APP_SERVER_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

export default function useAuth (code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState();

    const dispatch = useDispatch()

    useEffect(() => {
      const accesCookie = Cookies.get('access_token'),
            expiresCookie = Cookies.get('expires'),
            currentTime = Date.parse(new Date())
      if (currentTime - expiresCookie < 3500000) {
        setAccessToken(accesCookie);
        dispatch(setUserLoginStatus(true));
        return
      }
      if (code) {
            axios
              .post(`${serverUrl}login`, {
                code, clientId, clientSecret, redirectUri
              })
              .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                dispatch(setUserLoginStatus(true))
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
          axios
            .post(`${serverUrl}refresh`, {
              refreshToken,
            })
            .then(res => {
              setAccessToken(res.data.accessToken)
              setExpiresIn(res.data.expiresIn)
            })
            .catch(() => {
              window.location = "/"
            })
        }, (expiresIn - 60) * 1000)
    
        return () => clearInterval(interval)
      }, [refreshToken, expiresIn])

      useEffect(() => {
        if (accessToken) {
          const currentTime = Date.parse(new Date())
          Cookies.set('access_token', accessToken, { expires: 1 });
          Cookies.set('expires', currentTime, { expires: 1 });

          dispatch({type: 'SET_ACCESS_TOKEN', payload: accessToken})
        }
      }, [accessToken])

    return accessToken
}
