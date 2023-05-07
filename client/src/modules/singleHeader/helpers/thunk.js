import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
import {
    transformSingleTrack, 
    transformSingleArtist,
    transformPlaylist,
    transformAlbums,
    transformSmartPlaylist,
    transformUsersTopTracks,
    transformArtistTrack
} from '../../../utils/_transformData';

import likedCover from './../assets/likedCover.svg'
import favTrack from './../assets/favTrack.svg'
import favArtist from './../assets/favArtist.svg'

export const fetchSingleHeader = (request, type, id, userData) => (dispatch) => {

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

    async function getLibData() {
        switch(id) {
            case "saved":
                const saved = await request('/v1/me/tracks?market=UA')
                    .then(data => data.items.map(transformSmartPlaylist));
                dispatch(setData({
                    baseData: {
                        name: "Збережені треки",
                        thumbnail: likedCover,
                        descr: "Насолоджуйтеся збереженими треками",
                        track: saved[0]
                    },
                    track: saved
                })); 
                dispatch(setLoadingStatus('idle')); return;
            case "liked":
                const liked = await request('/v1/me/top/tracks')
                    .then(data => data.items.map(transformUsersTopTracks))
                dispatch(setData({
                    baseData: {
                        name: "Улюблені треки",
                        thumbnail: favTrack,
                        descr: "Насолоджуйтеся улюбленими треками",
                        track: liked[0]
                    },
                    track: liked
                })); 
                dispatch(setLoadingStatus('idle')); return;
            case "artist":
                let len = 0;
                const finalArr = [];
                await request('/v1/me/top/artists')
                        .then(data => data.items.map(async (item, i) => {
                            await request(`/v1/artists/${item.id}/top-tracks?market=UA`)
                                .then(data => data.tracks.map(transformArtistTrack))
                                .then(res => finalArr.push(...res))
                                .then(len++)
                            if(i === len-1) {
                                dispatch(setData({
                                    baseData: {
                                        name: "Улюблені виконавці",
                                        thumbnail: favArtist,
                                        descr: "Насолоджуйтеся треками улюблених виконавців",
                                        track: finalArr[0]
                                    },
                                    track: finalArr
                                }))
                            }
                        })) 
            default:
                dispatch(setData({
                    baseData: userData
                })); 
                dispatch(setLoadingStatus('idle')); return;
        }
    }

    try {
        switch(type) {
            case "track":
                getTrackData(); return;
            case "artist":
                getArtistData(); return;
            case "playlist":
                getPlaylistData(); return;
            case "album":
                getAlbumData(); return;
            default:
                getLibData(); return;
        }
    } catch {
        dispatch(setLoadingStatus('error'))
    }

}

const setData = (data) => ({type: "SET_SINGLE_HEADER_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_SINGLE_HEADER_LOADING", payload: status});
export const setSolidColor = color => ({type: 'SET_SOLID_COLOR', payload: color});