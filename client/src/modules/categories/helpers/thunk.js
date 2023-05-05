import {
    transformCategor
} from '../../../utils/_transformData'

export const fetchCategor = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const categories = await request('/v1/browse/categories?country=UA')
                        .then(data => data.categories.items.map(transformCategor));
        dispatch(setData(categories))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_CATEGOR_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_CATEGOR_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_CATEGOR_RELOAD", payload: rule});