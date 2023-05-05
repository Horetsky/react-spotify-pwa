import {
    transformArtist
} from '../../../utils/_transformData'

export const fetchLibArtist = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const followedArtists = await request('/v1/me/following?type=artist&locale=ua-UA')
                            .then(data => data.artists.items.map(transformArtist))
        dispatch(setData(followedArtists))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_LIB_ARTIST_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_LIB_ARTIST_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_LIB_ARTIST_RELOAD", payload: rule});