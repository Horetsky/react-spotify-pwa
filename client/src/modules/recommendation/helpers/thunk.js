import {
    transformReleases,
    transformRecomendPlaylist
} from '../../../utils/_transformData'

export const fetchRecommend = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const releases = await request('/v1/browse/new-releases?limit=10&country=UA')
                    .then(data => data.albums?.items.map(transformReleases));
    
        const playlists = await request('/v1/browse/featured-playlists?limit=3&market=UA')
                    .then(data => (data.playlists.items.map(transformRecomendPlaylist)));
        dispatch(setRecommendData([...releases, ...playlists]))
        dispatch(setLoadingStatus('idle'))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setRecommendData = (data) => ({type: "SET_RECOMMEND_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_RECOMMEND_LOADING", payload: status});