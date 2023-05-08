import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import AlbumItem from '../../components/albumItem/AlbumItem'
import useTrackPlay from '../singleHeader/helpers/useTrackPlay';

import AlbumItemModal from '../../components/shareModals/AlbumItemModal';

const TrackList = ({ type }) => {
    const {
        loadingStatus
    } = useSelector(state => state.singleHeaderSlice);

    return (
        <>
            {
                loadingStatus !== 'loading' ? <View type={type} /> : null
            }
        </>
    )
}

const View = ({ type }) => {
    const windowWidth = useRef(window.innerWidth);
    
    const [isModalOpen, setModalStatus] = useState({
        status: false,
        id: null
    })

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
    
    const setModalViewStatus = (id) => {
        setModalStatus({
            status: !isModalOpen.status,
            id: id
        })
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
                                openFunc={setModalViewStatus}
                            >
                                {
                                    isModalOpen.status && isModalOpen.id === item.id ?
                                    <AlbumItemModal 
                                        artistId={item.artist[0]?.id}
                                        trackId={item.id}
                                        spotify={item.spotify}
                                        openFunc={setModalViewStatus}
                                    /> : null
                                }
                            </AlbumItem>
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
    );
}

export default TrackList;