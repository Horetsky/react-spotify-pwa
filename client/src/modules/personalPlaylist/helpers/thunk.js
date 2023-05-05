import {
    tarnsformPlaylist
} from '../../../utils/_transformData'

export const fetchPersonalPlaylist = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const recommendPlaylist = await request(`/v1/browse/categories/party/playlists?limit=10&country=UA`)
                        .then(data => data.playlists.items.map(tarnsformPlaylist));
        dispatch(setData(recommendPlaylist))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_PERSONAL_PLAYLIST_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_PERSONAL_PLAYLIST_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_PERSONAL_PLAYLIST_RELOAD", payload: rule});