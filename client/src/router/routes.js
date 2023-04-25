export const ROUTES = {
    app: '/',
    login: '/login',

    library: '/library',
    discover: '/discover',
    search: '/search',

    singleTrack: (id = null) => (id ? `/track/${id}` : `/track/:trackId`),
    singleArtist: (id = null) => (id ? `/artist/${id}` : `/artist/:artistId`),

    singleAlbum: (id = null) => (id ? `/album/${id}` : `/album/:albumId`),
    singlePlaylist: (id = null) => (id ? `/playlist/${id}` : `/playlist/:playlistId`),

    autoPlaylist: (type = null) => (type ? `/smartlist/${type}` : `/smartlist/:playlistType`),

    smartDiscover: (type = null) => (type ? `/music-app/discover/${type}` : `/music-app/discover/:playlistType`),

    singleFilter: (type = null) => (type ? `/library/${type}` : `/library/:filterType`),
}