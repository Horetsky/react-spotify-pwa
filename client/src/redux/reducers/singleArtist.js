const defaultState = {
    baseData: {

    },

    albums: [],
    topTracks: [],
    newRelease: [],
    relatedArtists: []
}

export const singleArtist = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SOLID_COLOR":
            return {...state, color: action.payload};

        case "SET_ARTIST_DATA":
            return {...state, 
                    ...action.payload,
                    topTracks: action.payload.topTracks,
                    newRelease: action.payload.newRelease,
                    albums: action.payload.albums,
                };
        default: return state
    }
}