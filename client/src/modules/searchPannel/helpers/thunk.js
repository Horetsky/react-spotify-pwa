import {
    transformSearch
} from '../../../utils/_transformData'

export const fetchSearchResults = (request, query) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const results = await request(`/v1/search?include_external=audio&q=${query}&type=track&limit=10`)
                        .then(data => data.tracks.items.map(transformSearch))
        dispatch(setData(results))
        dispatch(setLoadingStatus('idle'))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

export const setData = (data) => ({type: "SET_SEARCH_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_SEARCH_LOADING", payload: status});