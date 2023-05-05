const defaultState = {
    reload: true,
    
    albums: [],
    loadingStatus: 'idle'
}

export const libAlbumsSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LIB_ALBUMS_DATA": 
            return {...state, albums: action.payload};
        case "SET_LIB_ALBUMS_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_LIB_ALBUMS_RELOAD":
            return {...state, reload: action.payload};

        default: return state
    }
}