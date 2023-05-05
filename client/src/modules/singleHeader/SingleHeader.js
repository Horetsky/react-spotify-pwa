import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../utils/useHttps";
import useColors from "./helpers/useColors";
import { fetchSingleHeader } from "./helpers/thunk";

import PlayButton from '../../components/headerControlBtn/PlayButton';
import ShareButton from '../../components/headerControlBtn/ShareButton';

import './style.scss'
const SingleHeader = ({ type, id }) => {
    const { getRequest, rapidRequest } = useHttp();
    const dispatch = useDispatch();
    const { getColor } = useColors()
    const {
        userData
    } = useSelector(state => state.user)

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(fetchSingleHeader(getRequest, type, id, userData))
    }, [type, id]);

    const { baseData } = useSelector(state => state.singleHeaderSlice);

    useEffect(() => {
        getColor(baseData?.thumbnail)
    }, [baseData])
    
    return (
        <header className='single-track-header'>
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
                     <PlayButton />
                     <ShareButton />
                 </div>
             </div>
        </header>
    );
};

export default SingleHeader;