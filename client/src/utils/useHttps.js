import axios from 'axios'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoadingStatus } from '../redux/_actions';

export default function useHttp() {
    const [token, setToken] = useState(Cookies.get('access_token'))
    const _apiBase = 'https://api.spotify.com';
    const _rapidApiBase = 'https://youtube-v31.p.rapidapi.com';
    const dispatch = useDispatch();

    const reqestSettings = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
    }
    const rapidApiOptions = {
        'X-RapidAPI-Key': '8b538eda6cmshd31bbc3aeae858fp13bc9fjsn02bf8fd700d4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    };

    const getRequest = useCallback( async (url) => { 
        const response = await axios
                .get(`${_apiBase}${url}`, {
                    headers: reqestSettings
                })
                .then(res => res.data)
                .catch(() => dispatch(setLoadingStatus('error')))

        return response
    }, []);

    const rapidRequest = useCallback( async (url) => {
        const response = await axios
                .get(`${_rapidApiBase}${url}`, {
                    headers: rapidApiOptions
                })
                .then(res => res.data)
                .catch(() => dispatch(setLoadingStatus('error')))

        return response
    }, [])

    const secondaryRequest = useCallback( async (url, method = "GET", headers = reqestSettings, body = null) => {

        try {
            const response = await fetch(`${_apiBase}${url}`, {method, body, headers});

            if(!response.ok) {
                 if(response.status === 401) {
                    //
                 }
                throw new Error(`Couldn't fetch ${url}, status: ${response.status}`);
            };

        } catch(e) {
            dispatch(setLoadingStatus('error'));
            throw e;
        }
    }, [])

    return {
        getRequest,
        rapidRequest,
        secondaryRequest
    }
}
