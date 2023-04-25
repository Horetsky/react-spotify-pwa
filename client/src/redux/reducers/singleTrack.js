const defaultState = {
    // BASE TRACK INFO
    id: '',
    
    baseData: {

    },
    
    spotify: '',
    
    audio: '', 
    videoUrl: '', 
    lirics: '',

    albums: [],
    relatedTracks: [],
}

export const singleTrack = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_TRACK_DATA":
            return {...state, 
                    ...action.payload,
                    albums: [action.payload.albums],
                    relatedTracks: action.payload.relatedTracks
                };

        
        default: return state
    }
}