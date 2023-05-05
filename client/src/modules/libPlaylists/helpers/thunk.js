import {
    tarnsformPlaylist
} from '../../../utils/_transformData'

export const fetchLibPlaylist = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const playlists = await request('/v1/me/playlists')
                            .then(data => data.items.map(tarnsformPlaylist));
        dispatch(setData(playlists))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_LIB_PLAYLIST_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_LIB_PLAYLIST_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_LIB_PLAYLIST_RELOAD", payload: rule});