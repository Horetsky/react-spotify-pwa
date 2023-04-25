const defaultState = {
    id: '',
    
    baseData: {

    },

    track: []
}

export const singleAlbum = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ALBUM_DATA":
            return {...state, ...action.payload};
        
        default: return state
    }
}