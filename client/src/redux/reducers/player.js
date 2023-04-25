const defaultState = {   
    player: false,
    
    isPlaying: false,
    isTheSamePlaing: false,
    currentTrackId: null,
    currentTrack:{},
}

export const player = (state = defaultState, action) => {
    switch (action.type) {
        case "SWITCH_PLAYER_STATUS":
            return {...state, ...action.payload};
        case "SET_CURRENT_PLAYER_TRACK":
            return {...state, currentTrack: action.payload};
        default: return state
    }
}