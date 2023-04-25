import {
    transformReleases,
    transformRecomendPlaylist,
    transformUsersTopTracks,
    transformArtistTrack,
    tarnsformPlaylist,
    transformArtist,
    transformSearch,
    transformCategor,
    transformUserAlbums,
    transformAlbums,
    transformPlaylist,
    transformSingleTrack,
    transformSingleArtist,
    transformArtistNewReleses,
    transformSmartPlaylist
} from '../service/_transformData';


import { 
    setLoadingStatus, 
    setLibPageData, 
    setUserData,
    setSearch, 
    setCategor,
    setListenPageData,
    setSmartPlaylistData,
    saveTrackStatus,
    setAlbumData,
    setTrackData,
    setArtistData
} from './_actions';

import likedCover from '../../assets/img/likedCover.svg'
import favTrack from '../../assets/img/favTrack.svg'
import favArtist from '../../assets/img/favArtist.svg'

export const getUserData = (reqest) => async (dispatch) => {
    const baseUserData = await reqest(`/v1/me`)
                        .then(data => ({
                            id: data.id,
                            name: data.display_name,
                            thumbnail: data.images.length > 0 ?  data.images[0].url : null,
                            followers: data.followers ? data.followers.total : null,
                            product: data.product,
                            spotify: data.external_urls.spotify
                        }))
    
    dispatch(setUserData({
        ...baseUserData
    }))
    console.log(baseUserData);
}
export const fetchListenPageData = (request) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const baseUserData = await request(`/v1/me`)
                        .then(data => ({
                            id: data.id,
                            name: data.display_name,
                            thumbnail: data.images.length > 0 ?  data.images[0].url : null,
                            followers: data.followers ? data.followers.total : null,
                            product: data.product,
                            spotify: data.external_urls.spotify
                        }))
    
    dispatch(setUserData({
        ...baseUserData
    }))
    const releases = await request('/v1/browse/new-releases?limit=10&country=UA')
                        .then(data => data.albums.items.map(transformReleases));

    const playlists = await request('/v1/browse/featured-playlists?limit=3&market=UA')
                        .then(data => (data.playlists.items.map(transformRecomendPlaylist)));

    
    const topTracks = await request('/v1/me/top/tracks?limit=15')
                        .then(data => (data.items.map(transformUsersTopTracks)));

    const topArtistTrack = await request('/v1/me/top/artists?limit=1')
            .then(data => data.items.length > 0 ? data.items[0]?.id : '0TnOYISbd1XYRBk9myaseg')
            .then(async id => {
                return await request(`/v1/artists/${id}/top-tracks?market=UA`)
                        .then(data => data.tracks.map(transformArtistTrack))
            })

    const recommendPlaylist = await request(`/v1/browse/categories/party/playlists?limit=10&country=UA`)
                        .then(data => data.playlists.items.map(tarnsformPlaylist));

    const topArtist = await request('/v1/me/top/artists?limit=10')
                        .then(data => data.items.map(transformArtist))

    dispatch(setListenPageData({
        recommendation: [...releases, ...playlists],
        topTracks,
        topArtistTrack,
        recommendPlaylist,
        topArtist,


        reload: false
    }))

    dispatch(setLoadingStatus('fulfilled'))
}

export const fetchSearchResults = (request, query) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const results = await request(`/v1/search?include_external=audio&q=${query}&type=track&limit=10`)
                        .then(data => data.tracks.items.map(transformSearch))

    dispatch(setLoadingStatus('fulfilled'))
    dispatch(setSearch(results))
}

export const fetchCategor = (request) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const categories = await request('/v1/browse/categories?country=UA')
                        .then(data => data.categories.items.map(transformCategor));

    dispatch(setLoadingStatus('fulfilled'))
    dispatch(setCategor({
        categories,
        reload: false
    }));

}

export const fetchLibPageDta = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const baseUserData = await request(`/v1/me`)
        .then(data => ({
            id: data.id,
            name: data.display_name,
            thumbnail: data.images.length > 0 ?  data.images[0].url : null,
            followers: data.followers ? data.followers.total : null,
            product: data.product,
            spotify: data.external_urls.spotify
        }))

    dispatch(setUserData({
    ...baseUserData
    }))

    const playlists = await request('/v1/me/playlists')
                            .then(data => data.items.map(tarnsformPlaylist));

    const followedArtists = await request('/v1/me/following?type=artist&locale=ua-UA')
                            .then(data => data.artists.items.map(transformArtist))
    const savedAlbums = await request('/v1/me/albums')
                            .then(data => data.items.map(transformUserAlbums))
    
    dispatch(setLibPageData({
        playlistCount: playlists.length,
        playlists: playlists,
        albums: savedAlbums,
        followedArtists: followedArtists,

        reload: false
    }))

    dispatch(setLoadingStatus('fulfilled'))
}




// ~~ Single Layout ~~ //
export const fetchSingleAlbumData = (request, id) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const data = await request(`/v1/albums/${id}`)
                        .then(transformAlbums);

    const isInLibrary = await request(`/v1/me/albums/contains?ids=${id}`)
                        .then(data => dispatch(saveTrackStatus(data[0])))

    dispatch(setAlbumData({
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

    dispatch(setLoadingStatus('fulfilled'));
}

export const fetchSinglePlaylistData = (request, id, userId) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))

    const isInLibrary = await request(`/v1/me/playlists`)
                    .then(data => data.items.filter(item => (item.id === id)))

    if (isInLibrary.length > 0) {
        dispatch(saveTrackStatus(true))
    } else {dispatch(saveTrackStatus(false))}

    const data = await request(`/v1/playlists/${id}?market=UA`)
                        .then(transformPlaylist);

    dispatch(setAlbumData({
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
    dispatch(setLoadingStatus('fulfilled'))
}

export const fetchSingleTrackData = (request, rapidApi, id) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const isInLibrary = await request(`/v1/me/tracks/contains?ids=${id}`)

    const trackData = await request(`/v1/tracks/${id}`)
                        .then(transformSingleTrack);

    const video = await rapidApi(`/search?q=${trackData?.name} ${trackData?.artist[0].name}&part=snippet%2Cid&regionCode=UA&maxResults=5`)
                        .then(data => ({videoUrl: data.items ? `https://www.youtube.com/embed/${data.items[0].id.videoId}` : `https://www.youtube.com/embed/${undefined}`}));
    
    const relatedTracks = await request(`/v1/recommendations?seed_tracks=${trackData.id}`)
                        .then(data => data.tracks.map(transformUsersTopTracks));

    dispatch(setTrackData({
        
        baseData: {
            id: trackData.id,
            artist: trackData.artist,
            date: trackData.date,
            name: trackData.name,
            thumbnail: trackData.thumbnail,
            audio: trackData.audio
        },
        albums: trackData.albums,
        ...video,
        spotify: trackData.spotify,
        relatedTracks
    }))
    
    dispatch(setLoadingStatus('fulfilled'))

    dispatch(saveTrackStatus(isInLibrary[0]))
}

export const fetchSingleArtistData = (request, rapidApi, id) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))

    const isInLibrary = await request(`/v1/me/following/contains?type=artist&ids=${id}`);

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

    dispatch(setArtistData({
        baseData: {
            ...artistData,
        },
        topTracks,
        newRelease, 
        albums,
        relatedArtists,
        ...video
    }))
    
    dispatch(setLoadingStatus('fulfilled'))
    
    dispatch(saveTrackStatus(isInLibrary[0]))
}



//////////////////
export const fetchSmartPlaylistSaved = (request) => async (dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const data = await request('/v1/me/tracks?market=UA')
                    .then(data => data.items.map(transformSmartPlaylist))
                    .then(res => {
                        dispatch(setAlbumData({
                            baseData: {
                                name: "Збережені треки",
                                thumbnail: likedCover,
                                descr: "Насолоджуйтеся збереженими треками",
                                track: res[0]
                            },
                            track: res
                        }));
                    })
            
    
    dispatch(setLoadingStatus('fulfilled'))
}

export const fetchSmartPlaylistLiked = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    const data = await request('/v1/me/top/tracks')
                    .then(data => data.items.map(transformUsersTopTracks))
                    .then(res => {
                        dispatch(setAlbumData({
                            baseData: {
                                name: "Улюблені треки",
                                thumbnail: favTrack,
                                descr: "Насолоджуйтеся улюбленими треками",
                                track: res[0]
                            },
                            track: res
                        }))
                    })
                    
    dispatch(setLoadingStatus('fulfilled'))
    
}

export const fetchSmartPlaylistArtist = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))

    let len = 0;
    const finalArr = [];
    await request('/v1/me/top/artists')
            .then(data => data.items.map(async (item, i) => {
                await request(`/v1/artists/${item.id}/top-tracks?market=UA`)
                    .then(data => data.tracks.map(transformArtistTrack))
                    .then(res => finalArr.push(...res))
                    .then(len++)
                if(i === len-1) {
                    dispatch(setAlbumData({
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
    dispatch(setLoadingStatus('fulfilled'))
}


////////////
export const saveTrackToLibrary = (request, isInLibrary, id, type='track') => (dispatch) => {
    console.log(isInLibrary, id, type);
    switch(type) {
        case"track":
            test(`/v1/me/tracks?ids=${id}`); break;
        case"playlist":
            test(`/v1/playlists/${id}/followers`); break;    
        case"album":
            test(`/v1/me/albums?ids=${id}`); break;
        case"artist":
            test(`/v1/me/following?type=artist&ids=${id}`); break;
    }

    function test (url) {
        if(isInLibrary) {
            request(url, 'DELETE');
            dispatch(saveTrackStatus(false))
        } else {
            request(url, 'PUT');
            dispatch(saveTrackStatus(true))
        }
    }
}

export const addToPlaylist = (request, id, track) => (dispatch) => {
    request(`/v1/playlists/${id}/tracks?position=0&uris=spotify:track:${track}`, "POST")

}
