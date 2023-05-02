import {
    transformSingleTrack,
    transformUsersTopTracks 
} from '../../../utils/_transformData'

export const fetchSingleTrack = (request, rapidApi, id) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const trackData = await request(`/v1/tracks/${id}`)
                        .then(transformSingleTrack);
        const video = await rapidApi(`/search?q=${trackData?.name} ${trackData?.artist[0].name}&part=snippet%2Cid&regionCode=UA&maxResults=5`)
                        .then(data => ({videoUrl: data.items ? `https://www.youtube.com/embed/${data.items[0].id.videoId}` : `https://www.youtube.com/embed/${undefined}`}));
    
        const relatedTracks = await request(`/v1/recommendations?seed_tracks=${trackData.id}`)
                        .then(data => data.tracks.map(transformUsersTopTracks));
        dispatch(setData({
            albums: [trackData.albums],
            ...video,
            relatedTracks
        }))
        dispatch(setLoadingStatus('idle'))
    } catch {
        dispatch(setLoadingStatus('error'))
    }

}

const setData = (data) => ({type: "SET_SINGLE_TRACK_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_SINGLE_TRACK_LOADING", payload: status});
export const setSolidColor = color => ({type: 'SET_SOLID_COLOR', payload: color});