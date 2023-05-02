const defaultState = {
    loadingStatus: 'idle'
}

export const singleArtistSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SINGLE_ARTIST_DATA":
            return {...state, ...action.payload};
        case "SET_SINGLE_ARTIST_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}