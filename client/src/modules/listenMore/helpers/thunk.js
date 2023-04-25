import {
    transformUsersTopTracks
} from '../../../utils/_transformData'

export const fetchListenMore = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const topTracks = await request('/v1/me/top/tracks?limit=15')
            .then(data => (data.items.map(transformUsersTopTracks)));
        dispatch(setData(topTracks))
        dispatch(setLoadingStatus('idle'))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_LISTEN_MORE_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_LISTEN_MORE_LOADING", payload: status});