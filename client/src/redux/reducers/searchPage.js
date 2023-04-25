const defaultState = {
    reload: true,

    searchResults: [],
    categories: [],
}

export const searchPage = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SEARCH_RESULTS":
            return{...state, searchResults: action.payload};

        case "SET_CATEGORIES":
            return{...state, ...action.payload};

        default: return state
    }
}