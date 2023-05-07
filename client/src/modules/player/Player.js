import { useDispatch, useSelector } from 'react-redux';
import { switchPlayerStatus } from './helpers/actions';

import SongInfo from './components/SongInfo'
import Track from './components/Track'

const PLayer = () => {
    const { player } = useSelector(state => state.playerSlice)

    return (
        <div className="player">
            {
                player ? <View /> : null
            }
        </div>
    );
};

const View = () => {
    const dispatch = useDispatch();
    const {
        currentTrack,
        isPlaying
    } = useSelector(state => state.playerSlice)

    return (
        <>
            <SongInfo 
                name={currentTrack.name}
                thumbnail={currentTrack.thumbnail}
                artist={currentTrack.artist}
            />

            <Track 
                sound={currentTrack.audio}
                isPlaying={isPlaying}
                play={() => dispatch(switchPlayerStatus(true))}
                pause={() => dispatch(switchPlayerStatus(false))}
            />
                
                    {/* <h1 className='player-error'>
                        Нажаль даний трек недоступний для відтворення
                        <br/>
                        <span
                            onClick={() => dispatch(switchPlayerStatus({player: false}))}
                        >Приховати</span>
                    </h1> */}
        </>
    );
}

export default PLayer;