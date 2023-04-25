const defaultState = {
    reload: true,
    
    recommendation: [],
    topTracks: [],
    topArtistTrack: []
}

export const listenPage = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LISTEN_PAGE_DATA": 
            return {...state, ...action.payload};
        
        default: return state
    }
}