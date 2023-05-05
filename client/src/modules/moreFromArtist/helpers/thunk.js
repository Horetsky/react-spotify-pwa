import {
    transformArtistTrack
} from '../../../utils/_transformData'

export const fetchmoreFromArtist = request => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const topArtistTrack = await request('/v1/me/top/artists?limit=1')
            .then(data => data.items.length > 0 ? data.items[0]?.id : '0TnOYISbd1XYRBk9myaseg')
            .then(async id => {
                return await request(`/v1/artists/${id}/top-tracks?market=UA`)
                        .then(data => data.tracks.map(transformArtistTrack))
            })
        dispatch(setData(topArtistTrack))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_ARTIST_MORE_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_ARTIST_MORE_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_ARTIST_MORE_RELOAD", payload: rule});