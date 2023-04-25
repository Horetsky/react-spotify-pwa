const defaultState = {
    reload: true,
    
    recommendation: [],
    loadingStatus: 'idle'
}

export const recommendationSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_RECOMMEND_DATA": 
            return {...state, recommendation: action.payload};
        case "SET_RECOMMEND_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}