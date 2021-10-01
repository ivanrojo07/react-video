export const setFavorite = payload =>{
    return {
        type:'SET_FAVORITE',
        payload,
    }
}

export const deleteFavorite = payload =>{
    return {
        type:'DELETE_FAVORITE',
        payload,
    }
}

export const loginRequest = payload =>{
    return {
        type:'LOGIN_REQUEST',
        payload,
    }
}

export const setLogoutRequest = payload =>{
    return {
        type:'LOGOUT_REQUEST',
        payload
    }
}

export const setRegisterRequest = payload =>{
    return {
        type:'REGISTER_REQUEST',
        payload
    }
}

export const getVideoSource = payload =>{
    return {
        type:'GET_VIDEO_SOURCE',
        payload
    }
}