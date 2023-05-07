import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'

import { fetchRecommend } from './helpers/thunk';
import RecommendMusicCard from '../../components/recommendMusicCard/RecommendMusicCard';
import RecommendCardSkeleton from '../../components/recommendCardSkeleton/RecommendCardSkeleton';

const Recommendation = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch();
    const { reload, loadingStatus } = useSelector(state => state.recommendationSlice);

    useEffect(() => {
        if (!reload) return
        dispatch(fetchRecommend(getRequest))
        console.log('recom fetch');
    }, [dispatch, reload])

    
    
    return (
        <section className='recommendation edge-blur'>
            <div className='slider-container'>
            {
               loadingStatus === 'loading' ? <RecommendCardSkeleton /> : <View /> 
            }
        </div>  
        </section>
    );
};

const View = () => {
    const {
        recommendation
    } = useSelector(state => state.recommendationSlice)

    return (
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
    );
}

export default Recommendation;