export const transformReleases = (data) => {
    return {
        id: data.id,
        name: data.name ? data.name.length > 20 ? `${data.name.slice(0, 20)}...` : data.name : 'Not avalible',
        type: data.album_type,
        artist: data.artists[0].name,
        date: (new Date(data.release_date)).getFullYear(),
        link: data.external_urls.spotify,
        thumbnail: data.images[0].url,

        atribute: 'Новий реліз'
    }
}

export const transformRecomendPlaylist = (data) => {
    return {
        id: data.id,
        name: data.name ? data.name.length > 14 ? `${data.name.slice(0, 14)}...` : data.name : 'For you',
        artist: data.description ? data.description.length > 63 ? `${data.description.slice(0, 60)}...` : data.description : 'Not avalible', //It's description
        thumbnail: data.images[0].url,
        type: data.type,

        atribute: 'Підібрано для вас'
    }
}

export const transformUsersTopTracks = (data) => {
    return {
        id: data.id,
        name: data.name,
        artist: data.album.artists.map(art => ({
            id: art.id,
            name: art.name
        })),
        audio: data.preview_url,
        // artistId: data.album.artists[0].id,
        thumbnail: data.album.images[1].url
    }
}

export const transformArtistTrack = (data) => {
    return {
        id: data.id,
        name: data.name,
        artist: data.artists.map(art => ({
            id: art.id,
            name: art.name
        })),
        audio: data.preview_url,
        // artistId: data.artists[0].id,
        thumbnail: data.album.images[0].url,
        albumId: data.album.id
    }
}

export const tarnsformPlaylist = (data) => {
    return {
        id: data.id,
        name: data.name,
        thumbnail: data.images ? data.images[0].url : null
    }
}

export const transformArtist = (data) => {
    return {
        id: data.id,
        name: data.name,
        thumbnail: data.images[1].url
    }
}

export const transformSearch = (data) => {
    return {
        id: data.id,
        name: data.name,
        artist: data.artists[0].name,
        artistId: data.artists[0].id,
        thumbnail: data.album.images[1].url
    }
}

export const transformCategor = (data) => {
    return {
        id: data.id,
        name: data.name,
        thumbnail: data.icons[0].url
    }
}


export const transformSingleTrack = (data) => {
    return {
        id: data.id,
        name: data.name ?  data.name : 'not',
        href: data.href,
        thumbnail: data.album.images[0].url,
        artist: data.artists?.map(item => ({
            name: item.name,
            id: item.id
        })),
        date: (new Date(data.album.release_date)).getFullYear(),
        audio: data.preview_url,
        spotify: data.external_urls ? data.external_urls.spotify : null,
        albums: {
            id: data.album.id,
            name: data.album.name ? data.album.name.length > 15 ? `${data.album.name.slice(0, 13)}...` : data.album.name : 'Not avalible',
            thumbnail: data.album.images[0].url,
            artist: data.artists.map(art => ({
                id: art.id,
                name: art.name
            })),
            artistId: data.artists[0].id,
        }
    }
}

export const transformSingleArtist = (data) => {
    return {
        id: data.id,
        name: data.name,
        thumbnail: data.images[0].url,
        genres: data.genres[0],
        // followers: data.followers.total,
        followers:  parseInt(data.followers.total) > 100000 ?
                    `${~~(data.followers.total / 100000)}M`: 
                    parseInt(data.followers.total) > 1000 ?
                    `${~~(data.followers.total / 1000)}K`: data.followers.total,
        spotify: data.external_urls.spotify
    }
}

export const transformArtistNewReleses = (data) => {
    return {
        id: data.id,
        name: data.name,
        thumbnail: data.images[1].url,
        artist: data.artists.map(art => ({
            id: art.id,
            name: art.name
        })),
        // artistId: data.artists[0].id,
    }
}

export const transformAlbums = (data) => {
        return {
            id: data.id,
            name: data.name,
            artist: data.artists.map(art=> ({
                id: art.id,
                name: art.name
            })),
            label: data.label,
            copyrights: data.copyrights.map(item => ({
                text: item.text
            })),
            thumbnail: data.images[0].url,
            trackCount: data.total_tracks,
            date: (new Date(data.release_date)).getFullYear(),
            spotify: data.external_urls.spotify,
            track: data.tracks.items.map(item => ({
                id: item.id,
                name: item.name,
                audio: item.preview_url,
                artist: item.artists.map(artist => ({
                    id: artist.id,
                    name: artist.name
                }))
            }))
        }
}

export const transformPlaylist = (data) => {
    return {
        id: data.id,
        name: data.name,
        descr: data.description,
        thumbnail: data.images ? data.images[0].url : null,
        followers:  data.followers ? parseInt(data.followers.total) > 100000 ?
                    `${~~(data.followers.total / 100000)}M`: 
                    parseInt(data.followers.total) > 1000 ?
                    `${~~(data.followers.total / 1000)}K`: data.followers.total : null,
        owner: data.owner ? data.owner.display_name : null,
        spotify: data.external_urls.spotify,
        trackCount: data.tracks.limit ? data.tracks.limit : null,
        track: data.tracks.items ? data.tracks.items.map(item => ({
            id: item.track?.id,
            name: item.track?.name,
            thumbnail: item.track?.album.images[1].url,
            audio: item.track?.preview_url,
            artist: item.track?.artists.map(artist => ({
                    id: artist.id,
                    name: artist.name
                })) 
        })) : null
    }
}

export const transformUserAlbums = (data) => {
    return {
        id: data.album?.id,
        name: data.album?.name,
        artist: data.album?.artists.map(item => ({
            name: item.name,
            id: item.id
        })),
        thumbnail: data.album?.images[0].url
    }
}

export const transformSmartPlaylist = (data) => {
    return {
        id: data.track.id,
        name: data.track.name,
        thumbnail: data.track.album.images[0].url,
        artist: data.track.artists.map(artist => ({
            id: artist.id,
            name: artist.name
        })),
        audio: data.track.preview_url,
    }
}

export const shuffle = (arr) => {
    return arr.sort(() => 0.5 - Math.random());
}