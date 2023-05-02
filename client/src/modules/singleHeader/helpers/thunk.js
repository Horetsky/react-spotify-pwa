import {
    transformSingleTrack, 
    transformSingleArtist,
    transformPlaylist,
    transformAlbums
} from '../../../utils/_transformData'

export const fetchSingleHeader = (request, type, id) => (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    console.log(type);
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
    async function getArtistData() {
        const isInLibrary = await request(`/v1/me/following/contains?type=artist&ids=${id}`);

        const artistData = await request(`/v1/artists/${id}`)
                        .then(transformSingleArtist);
        dispatch(setData({
            baseData: {
                ...artistData
            }
        }))
        dispatch(setLoadingStatus('idle'))
    }
    async function getPlaylistData() {
        const isInLibrary = await request(`/v1/me/playlists`)
                    .then(data => data.items.filter(item => (item.id === id)))

        // if (isInLibrary.length > 0) {
        //     dispatch(saveTrackStatus(true))
        // } else {dispatch(saveTrackStatus(false))}

        const data = await request(`/v1/playlists/${id}?market=UA`)
                        .then(transformPlaylist);
        dispatch(setData({
            baseData: {
                id: data.id,
                artist: [{name: data.owner, id: null}],
                copyrights: data.copyrights,
                date: data.date,
                name: data.name,
                descr: data.descr,
                thumbnail: data.thumbnail,
                trackCount: data.track.length,
                followers: data.followers,
                track: data?.track[0]
            },
    
            track: data.track
        }))
        dispatch(setLoadingStatus('idle'))
    }
    async function getAlbumData() {
        // const isInLibrary = await request(`/v1/me/albums/contains?ids=${id}`)
        //                 .then(data => dispatch(saveTrackStatus(data[0])))

        const data = await request(`/v1/albums/${id}`)
                        .then(transformAlbums);

        dispatch(setData({
            baseData: {
                id: data.id,
                artist: data.artist,
                copyrights: data.copyrights,
                date: data.date,
                name: data.name,
                spotify: data.spotify,
                thumbnail: data.thumbnail,
                trackCount: data.trackCount,
                track: data?.track[0]
            },
    
            track: data.track
        }))
        dispatch(setLoadingStatus('idle'))
    }
    try {
        switch(type) {
            case "track":
                getTrackData();
            case "artist":
                getArtistData();
            case "playlist":
                getPlaylistData();
            case "album":
                getAlbumData()
        }
    } catch {
        dispatch(setLoadingStatus('error'))
    }

}

const setData = (data) => ({type: "SET_SINGLE_HEADER_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_SINGLE_HEADER_LOADING", payload: status});
export const setSolidColor = color => ({type: 'SET_SOLID_COLOR', payload: color});