const defaultState = {
    reload: true,
    
    playlists: [],
    loadingStatus: 'idle'
}

export const libPlaylistsSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LIB_PLAYLIST_DATA": 
            return {...state, playlists: action.payload};
        case "SET_LIB_PLAYLIST_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_LIB_PLAYLIST_RELOAD":
            return {...state, reload: action.payload};

        default: return state
    }
}