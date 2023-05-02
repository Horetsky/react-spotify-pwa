const defaultState = {
    loadingStatus: 'idle'
}

export const singleTrackSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SINGLE_TRACK_DATA":
            return {...state, ...action.payload};
        case "SET_SINGLE_TRACK_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}