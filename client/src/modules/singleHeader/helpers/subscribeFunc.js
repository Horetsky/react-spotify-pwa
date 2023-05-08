import {
    transformArtist
} from '../../../utils/_transformData'

export const fetchArtistMore = (request, isFollowed, id) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const topArtist = await request(`/v1/me/following?type=artist&ids=${id}`)
                        .then(data => data.items.map(transformArtist))
        dispatch(setData(topArtist))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_ARTIST_FAV_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_ARTIST_FAV_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_ARTIST_FAV_RELOAD", payload: rule});