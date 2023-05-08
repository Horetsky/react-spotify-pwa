import { useDispatch, useSelector } from "react-redux"

export default function useTrackPlay() {
    const dispatch = useDispatch()
    const { 
        isPlaying,
        isTheSamePlaing,
        currentTrackId
    } = useSelector(state => state.playerSlice)

    const playItem = ( data ) => {
        if (isPlaying && isTheSamePlaing) {
            dispatch({
                type: "SWITCH_PLAYER_STATUS", 
                payload: false //pause track
            })
        } else if (!isPlaying && isTheSamePlaing) {
            dispatch({
                type: "SWITCH_PLAYER_STATUS", 
                payload: true // play track
            })
        } else {
            dispatch({
                type: "SET_PLAYER_TRACK_DATA", 
                payload: data // set current track
            })
            dispatch({
                type: "SWITCH_PLAYER_VIEW", 
                payload: true // show player
            })
            dispatch({
                type: "SWITCH_PLAYER_STATUS", 
                payload: true // play track
            })
        }
    }

    const playSingleItem = ( data ) => {
        if (currentTrackId === data.id && isPlaying) {
            dispatch({
                type: "SWITCH_PLAYER_STATUS", 
                payload: false //pause track
            })
        } else if (currentTrackId === data.id && !isPlaying) {
            dispatch({
                type: "SWITCH_PLAYER_STATUS", 
                payload: true // play track
            })
        } else {
            dispatch({
                type: "SET_PLAYER_TRACK_DATA", 
                payload: data // set current track
            })
            dispatch({
                type: "SWITCH_PLAYER_VIEW", 
                payload: true // show player
            })
            dispatch({
                type: "SWITCH_PLAYER_STATUS", 
                payload: true // play track
            })
        }
        
    }

    return {
        playItem,
        playSingleItem
    }
}