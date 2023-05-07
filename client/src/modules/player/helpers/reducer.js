const defaultState = {   
    player: false,
    
    isPlaying: false,
    isTheSamePlaing: false,
    currentTrackId: null,
    currentTrack: {},
}

export const playerSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SWITCH_PLAYER_STATUS":
            return {...state, isPlaying: action.payload};

        case "SWITCH_PLAYER_TRACK_STATUS":
            return {...state, isTheSamePlaing: action.payload}

        case "SET_PLAYER_TRACK_DATA":
            return {
                ...state, 
                currentTrack: action.payload,
                currentTrackId: action.payload.id
            };
        default: return state
    }
}