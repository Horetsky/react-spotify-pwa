const defaultState = {
    reload: true,
    
    artist: [],
    loadingStatus: 'idle'
}

export const libArtistSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LIB_ARTIST_DATA": 
            return {...state, artist: action.payload};
        case "SET_LIB_ARTIST_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_LIB_ARTIST_RELOAD":
            return {...state, reload: action.payload};

        default: return state
    }
}