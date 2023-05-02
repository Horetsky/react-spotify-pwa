export const ROUTES = {
    app: '/',
    login: '/login',

    library: '/library',
    discover: '/discover',
    search: '/search',

    singleTrack: (id = null) => (id ? `/track/${id}` : `/track/:itemId`),
    singleArtist: (id = null) => (id ? `/artist/${id}` : `/artist/:itemId`),

    singleAlbum: (id = null) => (id ? `/album/${id}` : `/album/:itemId`),
    singlePlaylist: (id = null) => (id ? `/playlist/${id}` : `/playlist/:itemId`),

    autoPlaylist: (type = null) => (type ? `/smartlist/${type}` : `/smartlist/:playlistType`),

    smartDiscover: (type = null) => (type ? `/music-app/discover/${type}` : `/music-app/discover/:playlistType`),

    singleFilter: (type = null) => (type ? `/library/${type}` : `/library/:filterType`),
}