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

    useEffect(() => {
        dispatch(fetchSingleHeader(getRequest, rapidRequest, type, id))
    }, [type, id]);

    const { baseData } = useSelector(state => state.singleHeaderSlice);

    useEffect(() => {
        getColor(baseData?.thumbnail)
    }, [baseData])
    
    return (
        <header className='single-track-header'>
            <div className="header-cover">
                <img src={baseData.thumbnail} alt="album cover"/>
            </div>
            <div className='track-info'>
                 <div className='track-caption'>
                     <h1>{baseData.name}</h1>
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
                            `- ${baseData.followers} followers` : null
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