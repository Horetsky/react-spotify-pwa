const defaultState = {
    reload: true,
    
    categories: [],
    loadingStatus: 'idle'
}

export const categoriesSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CATEGOR_DATA": 
            return {...state, categories: action.payload};
        case "SET_CATEGOR_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_CATEGOR_RELOAD":
            return {...state, reload: action.payload};

        default: return state
    }
}