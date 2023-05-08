
export const addToPlaylistFunc= (request, track, playlist) => async(dispatch) => {
    try {
        request(`/v1/playlists/${playlist}/tracks?position=0&uris=spotify:track:${track}`, "POST")
    } catch {
        throw new Error(`Couldn't add to playlist`);
    }
}