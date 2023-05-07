const defaultState = {
    loginStatus: false,
    acessToken: null,
    userReload: true,
    userData: {

    }
}

export const user = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_LOGIN_STATUS": 
            return {...state, loginStatus: action.payload};
        case "SET_ACCESS_TOKEN":
            return {...state, acessToken: action.payload};
        case "SET_USER_DATA":
            return {...state, userData: action.payload};
        case "SET_USER_RELOAD":
            return {...state, userReload: action.payload};
        default: return state
    }
}