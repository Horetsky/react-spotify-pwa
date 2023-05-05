import {
    transformSmartPlaylist
} from '../../../utils/_transformData'

export const fetchLibTracks = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const tracks = await request('/v1/me/tracks?market=UA')
                    .then(data => data.items.map(transformSmartPlaylist));
        dispatch(setData(tracks))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_LIB_TRACKS_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_LIB_TRACKS_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_LIB_TRACKS_RELOAD", payload: rule});