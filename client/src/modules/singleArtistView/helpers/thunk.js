import {
    transformSingleArtist,
    transformArtistTrack,
    transformArtistNewReleses,
    transformArtist
} from '../../../utils/_transformData'

export const fetchSingleArtist = (request, rapidApi, id) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const artistData = await request(`/v1/artists/${id}`)
                        .then(transformSingleArtist);

        const topTracks = await request(`/v1/artists/${id}/top-tracks?market=UA`)
                         .then(data => data.tracks.map(transformArtistTrack))

        const newRelease = await request(`/v1/artists/${id}/albums?include_groups=single&limit=1`)
                         .then(data => data.items.map(transformArtistNewReleses))

        const albums = await request(`/v1/artists/${id}/albums?include_groups=album&limit=10`)
                         .then(data => data.items.map(transformArtistNewReleses))       

        const video = await rapidApi(`/search?q=${artistData.name} official video&part=snippet%2Cid&regionCode=UA&maxResults=1&order=viewCount`)
                         .then(data => ({videoUrl: `https://www.youtube.com/embed/${data.items[0]?.id.videoId}`}))

        const relatedArtists = await request(`/v1/artists/${id}/related-artists?limit=12`)
                         .then(data => data.artists.map(transformArtist));

        dispatch(setData({
            topTracks,
            newRelease, 
            albums,
            relatedArtists,
            ...video
        }))
        dispatch(setLoadingStatus('idle'))
    } catch {
        dispatch(setLoadingStatus('error'))
    }

}

const setData = (data) => ({type: "SET_SINGLE_ARTIST_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_SINGLE_ARTIST_LOADING", payload: status});