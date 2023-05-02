import {
    transformSingleTrack, 
    transformUsersTopTracks 
} from '../../../utils/_transformData'

export const fetchSingleHeader = (request, rapidApi, type, id) => (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    async function getTrackData() {
        const isInLibrary = await request(`/v1/me/tracks/contains?ids=${id}`);
        const trackData = await request(`/v1/tracks/${id}`)
                        .then(transformSingleTrack);
        dispatch(setData({
            baseData: {
                id: trackData.id,
                artist: trackData.artist,
                date: trackData.date,
                name: trackData.name,
                thumbnail: trackData.thumbnail,
                audio: trackData.audio
            }
        }))
        dispatch(setLoadingStatus('idle'))
    }
    try {
        switch(type) {
            case "track":
                getTrackData()
        }
    } catch {
        dispatch(setLoadingStatus('error'))
    }

}

const setData = (data) => ({type: "SET_SINGLE_HEADER_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_SINGLE_HEADER_LOADING", payload: status});
export const setSolidColor = color => ({type: 'SET_SOLID_COLOR', payload: color});