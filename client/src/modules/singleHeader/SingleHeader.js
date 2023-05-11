import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../utils/useHttps";
import useColors from "./helpers/useColors";
import useTrackPlay from "./helpers/useTrackPlay";

import { fetchSingleHeader } from "./helpers/fetchHeaderData";
import { addToPlaylistFunc } from "./helpers/addToPlaylistFunc";
import { saveToLibrary } from "./helpers/saveToLibrary";
import HeaderSkeleton from "../../components/headerSkaleton/HeaderSkeleton";
import PlayButton from '../../components/headerControlBtn/PlayButton';
import ShareButton from '../../components/headerControlBtn/ShareButton';
import InfoButton from "../../components/headerControlBtn/InfoButton";

import HeaderShareModal from "../../components/shareModals/HeaderShareModal";

import './style.scss'
const SingleHeader = ({ type, id, loadingStatus }) => {
    const { getRequest } = useHttp();
    const dispatch = useDispatch();

    const { userData } = useSelector(state => state.user)

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(fetchSingleHeader(getRequest, type, id, userData))
    }, [type, id]);

    
    
    return (
        <header className='single-track-header'>
            {
                loadingStatus === 'loading' ? <HeaderSkeleton /> : <View type={type} id={id}/>
            }
        </header>
    );
};

const View = ({ type }) => {
    const [isModalOpen, setModalStatus] = useState(false)
    const { secondaryRequest } = useHttp();

    const { getColor } = useColors()
    const dispatch = useDispatch();
    const { playItem } = useTrackPlay()

    const { 
        baseData,
        isInLibrary 
    } = useSelector(state => state.singleHeaderSlice);
    const {
        albums
    } = useSelector(state => state.singleTrackSlice);
    const {
        userData
    } = useSelector(state => state.user);

    const { 
        currentTrackId, 
        isPlaying,
        isTheSamePlaing
    } = useSelector(state => state.playerSlice)

    useEffect(() => {
        getColor(baseData?.thumbnail)
    }, [baseData])

    useEffect(() => {
        if (type === 'track') setPlayerStatus(baseData.id);
        else setPlayerStatus(baseData?.track?.id);
    }, [baseData, currentTrackId, type])

    const setPlayerStatus = ( item ) => {
        if (item === currentTrackId) {
            dispatch({
                type: "SWITCH_PLAYER_TRACK_STATUS", 
                payload: true
            })
        } else {
            dispatch({
                type: "SWITCH_PLAYER_TRACK_STATUS", 
                payload: false
            })
        }
    }
    
    const handPlay = () => {
        if ( type === 'track') playItem(baseData);
        else playItem(baseData.track);
    }

    const setModalViewStatus = () => {
        setModalStatus(!isModalOpen)
    }

    const handAddToPlaylist = (id) => {
        dispatch(addToPlaylistFunc(secondaryRequest, baseData?.id, id))
    }

    const handSaveToLib = () => {
        dispatch(saveToLibrary(secondaryRequest, baseData?.id, isInLibrary, type))
    }

    return (
        <>
            <div className="header-cover" style={type === 'artist' || type === 'library' ? {"border-radius": "100%"} : null}>
                <img src={baseData.thumbnail} alt="album cover"/>
            </div>
            <div className='track-info'>
                <div className={type !== 'library' ?
                    'track-caption' : 'track-caption lib-caption'
                }>
                    <h1>{baseData.name}</h1>
                    {
                        baseData.genres ?
                        <h3>{baseData.genres}</h3> : null
                    }
                     <div className='artists-wrapper'>
                        {
                            baseData.artist?.map(art => (
                                <Link to={ROUTES.singleArtist(art.id)} key={art.id}>
                                    <h3>{art.name}</h3>
                                </Link>
                            ))
                        }
                        {
                           baseData.followers ?
                           <h4>{baseData.followers} follower</h4> : null
                        }
                        {
                            baseData.playlistCount ?
                            <h4>{baseData.playlistCount} плейлістів</h4> : null
                        }
                     </div>
                    {
                        baseData.descr ? 
                        <p>{baseData.descr}</p> :
                        baseData.trackCount ?
                        <p>Альбом: {baseData.trackCount} {baseData.trackCount === 1 ? 'трек' : baseData.trackCount > 1 && baseData.trackCount < 5 ? 'треки' : 'треків'}</p> :
                        baseData.date ?
                        <p>{baseData.date} рік</p> : null
                    }
                 </div>
                 <div className='track-control'>
                    {
                        type === 'artist' || type === 'library' ?
                        <InfoButton url={baseData.spotify}/> 
                        :
                        <PlayButton 
                            isTheSamePlaing={ isTheSamePlaing }
                            isPlaying={ isPlaying }
                            playFunc={ handPlay }
                        />
                    }
                    <ShareButton openFunc={setModalViewStatus}>
                        {
                            isModalOpen ?
                            <HeaderShareModal
                                type={type}
                                artistId={type === 'track' || type === 'album' ? baseData?.artist[0]?.id : null}
                                album={type === 'track' ? albums[0]?.id : null}
                                playlists={type === 'track' ? userData.playlists : null}
                                addToPlaylist={handAddToPlaylist}
                                isInLibrary={isInLibrary}
                                saveToLib={handSaveToLib}
                                spotify={baseData.spotify ? baseData.spotify : null}
                            /> : null
                        }
                    </ShareButton>
                 </div>
             </div>
        </>
    )
}

export default SingleHeader;