const defaultState = {
    reload: true,
    
    moreFromArtist: [],
    loadingStatus: 'idle'
}

export const moreFromArtistSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ARTIST_MORE_DATA": 
            return {...state, moreFromArtist: action.payload};
        case "SET_ARTIST_MORE_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}