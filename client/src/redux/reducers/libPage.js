const defaultState = {
    reload: true,
    
    activeFilter: null,
    headerData: {
        name: null,
        thumbnail: null,
        descr: null
    },

    smartPlaylist: { 
        track: []
    }
}

export const libPage = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LIB_PAGE_DATA":
            return {...state, ...action.payload};

        case "SET_ACTIVE_FILTER":
            return {...state, activeFilter: action.payload};
            
        case "SET_SMART_PLAYLIST_DATA":
            return {...state, smartPlaylist: action.payload};

        case "SET_SMART_PLAYLIST_HEADER":
            return {...state, headerData: action.payload}
            
        default: return state
    }
}