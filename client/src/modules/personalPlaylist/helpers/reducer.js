const defaultState = {
    reload: true,
    
    personalPlaylist: [],
    loadingStatus: 'idle'
}

export const personalPlaylistSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PERSONAL_PLAYLIST_DATA": 
            return {...state, personalPlaylist: action.payload};
        case "SET_PERSONAL_PLAYLIST_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_PERSONAL_PLAYLIST_RELOAD":
            return {...state, reload: action.payload};
        default: return state
    }
}