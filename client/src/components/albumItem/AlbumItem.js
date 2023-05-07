import { useRef } from 'react';

import { Link } from 'react-router-dom'
import { ROUTES } from '../../router/routes';

import './albumItem.scss'

const AlbumItem = ({ num, id, name, thumbnail, artist, playTrack, isPlaying, currentPlayTrack }) => {
    const windowWidth = useRef(window.innerWidth);
    // const {isTheSamePlaing, isPlaying, currentTrackId} = useSelector(state => state.player)
    // const { isModalOpen } = useSelector(state => state.general)


    return (
        <Link to={null}>
            <div className='search-item-wrapper album-item-wrapper'>
                <div className='item-data'
                    onClick={() => playTrack(id)}
                >
                    <div className='album-item-sign'>
                        {
                                currentPlayTrack ?
                                <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg" className='curren-track-playing-icon'>
                                    <path d="M0 3.04395C0 0.686289 2.56414 -0.773 4.58737 0.431728L30.5169 15.8875C32.4944 17.0656 32.4944 19.9323 30.5169 21.1104L4.58737 36.5676C2.56414 37.7739 0 36.3131 0 33.9554V3.04395Z" fill="black"/>
                                </svg>
                                :
                                <span className='num'>
                                    {num}
                                </span>
                        }
                    </div>

                    <div className='search-item-cover'>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            className={windowWidth.current > 550 ? 'track-play-btn track-play-btn-hover' : 'track-play-btn '}
                        >
                            <circle cx="43" cy="43" r="43" fill="black" fillOpacity="0.88"/>
                            <path d="M29 27.0439C29 24.6863 31.5641 23.227 33.5874 24.4317L59.5169 39.8875C61.4944 41.0656 61.4944 43.9323 59.5169 45.1104L33.5874 60.5676C31.5641 61.7739 29 60.3131 29 57.9554V27.0439Z" fill="white"/>
                        </svg>
                        {
                            isPlaying && currentPlayTrack ?
                            <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className='track-play-btn track-pause-btn'>
                                <circle cx="43" cy="43" r="43" fill="black" fillOpacity="0.88"/>
                                <path d="M39.125 21.84V64.16C39.125 64.648 38.8945 65.116 38.4843 65.4611C38.0741 65.8061 37.5177 66 36.9375 66H28.1875C27.6073 66 27.0509 65.8061 26.6407 65.4611C26.2305 65.116 26 64.648 26 64.16V21.84C26 21.352 26.2305 20.884 26.6407 20.5389C27.0509 20.1939 27.6073 20 28.1875 20H36.9375C37.5177 20 38.0741 20.1939 38.4843 20.5389C38.8945 20.884 39.125 21.352 39.125 21.84ZM61 21.84V64.16C61 64.648 60.7695 65.116 60.3593 65.4611C59.9491 65.8061 59.3927 66 58.8125 66H50.0625C49.4823 66 48.9259 65.8061 48.5157 65.4611C48.1055 65.116 47.875 64.648 47.875 64.16V21.84C47.875 21.352 48.1055 20.884 48.5157 20.5389C48.9259 20.1939 49.4823 20 50.0625 20H58.8125C59.3927 20 59.9491 20.1939 60.3593 20.5389C60.7695 20.884 61 21.352 61 21.84Z" fill="white"/>
                            </svg> : null
                        }
                        

                        <img src={thumbnail} alt='album cover' />
                    </div>
                    <div className='search-item-text album-item-text'>
                        <h1>{name}</h1>
                        <div className='artists'>
                            {
                                artist?.map((art, i) => (
                                    <Link to={ROUTES.singleArtist(art.id)} key={art.id}>
                                        <h4>{art.name}</h4>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button className="menu-btn"
                    // onClick={() => dispatch(openModal(isModalOpen ? null : `track_${id}`))}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
                    </svg>

                </button>
                    {/* {
                        isModalOpen === `track_${id}` ? 
                            <AlbumTrackModal 
                                action={{id: id, artistId: artist[0]?.id}} 
                                type="track" 
                            /> : null
                    } */}
            </div>
        </Link>
    )
}

export default AlbumItem