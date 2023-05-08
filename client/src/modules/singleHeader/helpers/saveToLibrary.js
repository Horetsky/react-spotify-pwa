
export const saveToLibrary= (request, id, isInLibrary, type) => async(dispatch) => {
    try {
        switch(type) {
            case"track":
                save(`/v1/me/tracks?ids=${id}`); break;
            case"playlist":
                save(`/v1/playlists/${id}/followers`); break;    
            case"album":
                save(`/v1/me/albums?ids=${id}`); break;
            case"artist":
                save(`/v1/me/following?type=artist&ids=${id}`); break;
        }

        function save (url) {
            if(isInLibrary) {
                request(url, 'DELETE');
                dispatch(saveTrackStatus(false))
            } else {
                request(url, 'PUT');
                dispatch(saveTrackStatus(true))
            }
        }
    } catch {
        throw new Error(`Couldn't save to librart`);
    }
}

const saveTrackStatus = status => ({type: 'SWITCH_SAVE_TRACK_STATUS', payload: status});