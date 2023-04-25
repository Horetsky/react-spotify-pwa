import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'

import { fetchRecommend } from './helpers/thunk';
import RecommendMusicCard from '../../components/recommendMusicCard/RecommendMusicCard';
const Recommendation = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(fetchRecommend(getRequest))
    }, [])

    const {
        recommendation
    } = useSelector(state => state.recommendationSlice)
    
    return (
        <section className='recommendation edge-blur'>
            <div className='slider-container'>
            {
                recommendation?.map((item) => {
                    return <RecommendMusicCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            artist={item.artist}
                            date={item.date ? item.date : 'Spotify'}
                            thumbnail={item.thumbnail}
                            type={item.type}
                            atribute={item.atribute}
                            />
                })
            }
        </div>  
        </section>
    );
};

export default Recommendation;