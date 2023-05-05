const defaultState = {
    reload: true,
    
    tarcks: [],
    loadingStatus: 'idle'
}

export const libTracksSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LIB_TRACKS_DATA": 
            return {...state, tracks: action.payload};
        case "SET_LIB_TRACKS_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_LIB_TRACKS_RELOAD":
            return {...state, reload: action.payload};

        default: return state
    }
}