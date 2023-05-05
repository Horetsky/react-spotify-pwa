const defaultState = {    
    search: [],
    loadingStatus: 'idle'
}

export const searchPanelSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SEARCH_DATA": 
            return {...state, search: action.payload};
        case "SET_SEARCH_LOADING":
            return {...state, loadingStatus: action.payload};

        default: return state
    }
}