import {
    transformArtist
} from '../../../utils/_transformData'

export const fetchArtistMore = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {

        const topArtist = await request('/v1/me/top/artists?limit=10')
                        .then(data => data.items.map(transformArtist))
        dispatch(setData(topArtist))
        console.log(topArtist);
        dispatch(setLoadingStatus('idle'))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_ARTIST_FAV_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_ARTIST_FAV_LOADING", payload: status});