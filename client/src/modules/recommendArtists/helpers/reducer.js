const defaultState = {
    reload: true,
    
    favArtist: [],
    loadingStatus: 'idle'
}

export const favArtistSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ARTIST_FAV_DATA": 
            return {...state, favArtist: action.payload};
        case "SET_ARTIST_FAV_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}