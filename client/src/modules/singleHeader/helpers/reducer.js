const defaultState = {
    baseData: {

    },
    solidColor: '#fff',
    loadingStatus: 'idle'
}

export const singleHeaderSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SINGLE_HEADER_DATA":
            return {...state, ...action.payload};
        case "SET_SOLID_COLOR":
            return {...state, solidColor: action.payload};
        case "SET_SINGLE_HEADER_LOADING":
            return {...state, loadingStatus: action.payload}
        default: return state
    }
}