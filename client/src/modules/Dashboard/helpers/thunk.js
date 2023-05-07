import {
    tarnsformPlaylist
} from '../../../utils/_transformData'

export const fetchUserData = (request) => async(dispatch) => {
    try {
        const baseUserData = await request(`/v1/me`)
                        .then(data => ({
                            id: data.id,
                            name: data.display_name,
                            thumbnail: data.images.length > 0 ?  data.images[0].url : null,
                            followers: data.followers ? `${data.followers.total}` : null,
                            product: data.product,
                            spotify: data.external_urls.spotify
                        }))
        const playlists = await request('/v1/me/playlists')
                        .then(data => data.items.map(tarnsformPlaylist));
        dispatch(setReload(false))
        dispatch(setData({
            playlistCount: playlists.length,
            ...baseUserData
        }))
    } catch {

    }
}

const setData = (data) => ({type: "SET_USER_DATA", payload: data});
const setReload = rule => ({type: "SET_USER_RELOAD", payload: rule});