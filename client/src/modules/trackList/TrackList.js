import { useRef } from 'react';
import { useSelector } from 'react-redux';
import AlbumItem from '../../components/albumItem/AlbumItem'
import useTrackPlay from '../../utils/useTrackPlay';

const TrackList = ({ type }) => {
    const windowWidth = useRef(window.innerWidth);
    const { playSingleItem } = useTrackPlay()
    const {
        baseData,
        track
    } = useSelector(state => state.singleHeaderSlice);

    const {
        isPlaying,
        currentTrackId
    } = useSelector(state => state.playerSlice)

    const handPlay = (id) => {
        const currentTrack = track.filter(item => item.id === id)
        playSingleItem(...currentTrack)
    }
    

    return (
        <>
            <section className="track-list">

                <ul className="track-list-items">
                    {
                        track?.map((item, i) => (
                            <AlbumItem 
                                key={item.id}
                                id={item.id}
                                num={i+1}
                                name={item.name}
                                thumbnail={
                                    type === 'playlist' || type === 'library' ? 
                                    item.thumbnail : baseData.thumbnail
                                }
                                artist={windowWidth.current < 550 ? [item.artist[0]] : item.artist}
                                audio={item.audio}
                                isPlaying={ isPlaying }
                                currentPlayTrack = { item.id === currentTrackId ? true : false }

                                playTrack={handPlay}
                            />
                        ))
                    }
                </ul>

            </section>

            {
                baseData.copyrights ? 
                <>
                <section className="rights">
                    <div className="copy-rights">
                        {
                            baseData.copyrights.map((item, i) => (
                                <span key={i}>{item.text}{i % 2 === 0 ? ' | ' : null}</span>
                            ))
                        }
                    </div>
                    <p>{baseData.date} рік</p>
                </section>
                </> : null
            }
        </>
    )
}

export default TrackList;