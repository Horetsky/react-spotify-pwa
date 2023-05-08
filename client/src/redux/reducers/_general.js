const defaultState = {
    token: null,
    loginStatus: false,
    isModalOpen: null,
    
    isInLibrary: null,
    
    activePage: 'listen',
    loadingStatus: 'idle',
}

export const general = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_TOKEN": 
            return {...state, token: action.payload};

        case "SWITCH_ACTIVE_PAGE":
                return {...state, activePage: action.payload};
                
        case "SET_LOADING_STATUS":
            return {...state, loadingStatus: action.payload};

        case "SET_SOLID_COLOR":
            return {...state, solidColor: action.payload}

        case "SWITCH_SAVE_TRACK_STATUS":
            return {...state, isInLibrary: action.payload};
            
        default: return state
    }
}