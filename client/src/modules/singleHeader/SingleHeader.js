import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../utils/useHttps";
import useColors from "./helpers/useColors";
import useTrackPlay from "../../utils/useTrackPlay";

import { fetchSingleHeader } from "./helpers/thunk";

import HeaderSkeleton from "../../components/headerSkaleton/HeaderSkeleton";
import PlayButton from '../../components/headerControlBtn/PlayButton';
import ShareButton from '../../components/headerControlBtn/ShareButton';

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

const View = ({ type, id }) => {
    const { getColor } = useColors()
    const dispatch = useDispatch();
    const { playItem } = useTrackPlay()
    const { 
        baseData 
    } = useSelector(state => state.singleHeaderSlice);

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
                     <PlayButton 
                        isTheSamePlaing={ isTheSamePlaing }
                        isPlaying={ isPlaying }
                        playFunc={ handPlay }
                    />
                     <ShareButton />
                 </div>
             </div>
        </>
    )
}

export default SingleHeader;