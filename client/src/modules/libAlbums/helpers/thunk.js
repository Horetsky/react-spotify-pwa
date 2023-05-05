import {
    transformUserAlbums
} from '../../../utils/_transformData'

export const fetchLibAlbums = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const savedAlbums = await request('/v1/me/albums')
                            .then(data => data.items.map(transformUserAlbums))
        dispatch(setData(savedAlbums))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_LIB_ALBUMS_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_LIB_ALBUMS_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_LIB_ALBUMS_RELOAD", payload: rule});