import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchmoreFromArtist } from './helpers/thunk';

import MusicCardSlider from "../../components/musicCardSlider/MusicCardSlider";
import MusicCardSkeleton from '../../components/musicCardSkeleton/MusicCardSkeleton';

const MoreFromArtist = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch() ;
    const { reload, loadingStatus } = useSelector(state => state.moreFromArtistSlice)

    useEffect(() => {
        if (!reload) return;
        dispatch(fetchmoreFromArtist(getRequest))
        console.log('more from artist fetch');
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
        moreFromArtist
    } = useSelector(state => state.moreFromArtistSlice);

    return (
        <>
            {
                moreFromArtist.length > 0 
                ? 
                <MusicCardSlider data={moreFromArtist} type="track" lable="Більше від улюбленого виконавця"/>
                :   <h1>Нажаль у вас немає недавніх треків</h1>

            }
        </>
    )
}

export default MoreFromArtist;