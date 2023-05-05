import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../utils/useHttps'
import { fetchArtistMore } from './helpers/thunk';
import ArtistCardSlider from '../../components/artistCardSlider/ArtistCardSlider';

const RecommendArtists = () => {
    const {getRequest} = useHttp();
    const dispatch = useDispatch();
    const { reload } = useSelector(state => state.favArtistSlice)
    useEffect(() => {
        if (!reload) return;
        dispatch(fetchArtistMore(getRequest));
        console.log('fav artist getch');
    }, [dispatch, reload])
    const {
        favArtist
    } = useSelector(state => state.favArtistSlice)
    return (
        <section className='artist-more'>
            {
                favArtist.length > 0 
                ? 
                <ArtistCardSlider data={favArtist} type="track" lable="Улюблені артисти"/>
                :   <h1>Нажаль у вас немає недавніх треків</h1>
            }
        </section>
    );
};




export default RecommendArtists;