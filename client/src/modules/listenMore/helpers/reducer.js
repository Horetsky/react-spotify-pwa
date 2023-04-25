const defaultState = {
    reload: true,
    
    listenMore: [],
    loadingStatus: 'idle'
}

export const listenMoreSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LISTEN_MORE_DATA": 
            return {...state, listenMore: action.payload};
        case "SET_LISTEN_MORE_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}