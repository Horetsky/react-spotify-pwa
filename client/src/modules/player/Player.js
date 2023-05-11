import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchPlayerStatus } from './helpers/actions';

import SongInfo from './components/SongInfo'
import Track from './components/Track'

const PLayer = () => {
    const { player } = useSelector(state => state.playerSlice)

    return (
        <>
            {
                player ? <View /> : null
            }
        </>
    );
};

const View = () => {
    const dispatch = useDispatch();
    const {
        currentTrack,
        isPlaying
    } = useSelector(state => state.playerSlice)

    return (
        <div className="player">
            <SongInfo 
                name={currentTrack.name}
                thumbnail={currentTrack.thumbnail}
                artist={[currentTrack.artist[0]]}
            />

            <Track 
                sound={currentTrack.audio}
                isPlaying={isPlaying}
                play={() => dispatch(switchPlayerStatus(true))}
                pause={() => dispatch(switchPlayerStatus(false))}
            />
        </div>
    );
}

export default PLayer;