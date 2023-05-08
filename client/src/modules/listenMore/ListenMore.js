import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchListenMore } from './helpers/thunk';

import MusicCardSlider from "../../components/musicCardSlider/MusicCardSlider";
import MusicCardSkeleton from '../../components/musicCardSkeleton/MusicCardSkeleton';

const ListenMore = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch() ;
    const { reload, loadingStatus } = useSelector(state => state.listenMoreSlice)

    useEffect(() => {
        if (!reload) return
        dispatch(fetchListenMore(getRequest))
    }, [dispatch, reload])

    return (
        <section className='listen-recenty'>
            {
                loadingStatus === 'loading' ? <MusicCardSkeleton /> : <View />
            }
        </section>
    );
};

const View = () => {
    const {
        listenMore
    } = useSelector(state => state.listenMoreSlice);

    return (
        <>
            {
                listenMore.length > 0 
                ? 
                <MusicCardSlider data={listenMore} type="track" lable="Слухати знову"/>
                :   <h1>Нажаль у вас немає недавніх треків</h1>

            }
        </>
    )
}

export default ListenMore;